const STRAPI_BASE = "https://strapi-app-erk84.ondigitalocean.app";
const ENDPOINT = `${STRAPI_BASE}/api/payments/wayforpay/checkout-by-token`;

const payBtn = document.getElementById("payBtn");
const pkgTitleEl = document.getElementById("pkgTitle");
const pkgPriceEl = document.getElementById("pkgPrice");
const subtitleEl = document.getElementById("subtitle");

const errorBox = document.getElementById("errorBox");
const errorText = document.getElementById("errorText");

function showError(msg) {
  errorText.textContent = msg;
  errorBox.hidden = false;
  subtitleEl.textContent = "Не вдалося підготувати оплату.";
  payBtn.disabled = true;
  payBtn.textContent = "Помилка";
}

function getToken() {
  const params = new URLSearchParams(location.search);
  return params.get("token");
}

async function fetchCheckoutByToken(token) {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`checkout-by-token failed: ${res.status} ${text}`);
  }

  return res.json();
}

function submitWayForPay(actionUrl, fields) {
  const form = document.createElement("form");
  form.method = "POST";
  form.action = actionUrl;
  form.referrerPolicy = "no-referrer";

  for (const [name, value] of Object.entries(fields)) {
    if (Array.isArray(value)) {
      value.forEach((v) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = String(v);
        form.appendChild(input);
      });
    } else {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = String(value);
      form.appendChild(input);
    }
  }

  document.body.appendChild(form);
  form.submit();
}

(async function init() {
  const token = getToken();
  if (!token) {
    showError(
      "Токен не знайдено в URL. Відкрийте посилання з сайту з тарифами.",
    );
    return;
  }

  try {
    subtitleEl.textContent = "Готуємо дані для оплати…";
    payBtn.disabled = true;
    payBtn.textContent = "Завантаження…";

    const data = await fetchCheckoutByToken(token);

    if (data.status && data.status !== "CREATED") {
      const order = encodeURIComponent(data.orderReference || "");
      location.href = `./result.html?order=${order}`;
      return;
    }

    const title = data?.display?.packageTitle || "Підписка";
    const amount = data?.display?.amount || data?.fields?.amount || "";
    const currency = data?.display?.currency || data?.fields?.currency || "UAH";

    pkgTitleEl.textContent = title;
    pkgPriceEl.textContent = `${amount} ${currency}`;
    subtitleEl.textContent = "Перевірте тариф і натисніть “Оплатити”.";

    payBtn.disabled = false;
    payBtn.textContent = "Оплатити";

    payBtn.addEventListener("click", () => {
      submitWayForPay(data.actionUrl, data.fields);
    });
  } catch (e) {
    console.error(e);
    showError(e.message || "Невідома помилка");
  }
})();
