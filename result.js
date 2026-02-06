const STRAPI_BASE = "https://strapi-app-erk84.ondigitalocean.app";
const STATUS_ENDPOINT = `${STRAPI_BASE}/api/payments/wayforpay/status-public`;

const statusText = document.getElementById("statusText");
const pkgTitleEl = document.getElementById("pkgTitle");
const pkgPriceEl = document.getElementById("pkgPrice");
const orderRefEl = document.getElementById("orderRef");
const statusValEl = document.getElementById("statusVal");

const failRow = document.getElementById("failRow");
const failReasonEl = document.getElementById("failReason");

const errorBox = document.getElementById("errorBox");
const errorText = document.getElementById("errorText");

function showError(msg) {
  errorText.textContent = msg;
  errorBox.hidden = false;
  statusText.textContent = "Не вдалося отримати статус платежу.";
}

function getOrderReference() {
  const params = new URLSearchParams(location.search);
  return params.get("order");
}

async function fetchStatus(orderReference) {
  const url = `${STATUS_ENDPOINT}?orderReference=${encodeURIComponent(orderReference)}`;
  const res = await fetch(url, { method: "GET" });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`status-public failed: ${res.status} ${text}`);
  }
  return res.json();
}

function renderStatus(data) {
  orderRefEl.textContent = data.orderReference || "—";
  statusValEl.textContent = data.status || "—";

  const title = data?.package?.title || "Підписка";
  const amount = data?.amount ?? "";
  const currency = data?.currency ?? "UAH";

  pkgTitleEl.textContent = title;
  pkgPriceEl.textContent = `${amount} ${currency}`;

  if (data.status === "APPROVED") {
    statusText.textContent = "Оплата успішна ✅ Доступ буде активовано.";
  } else if (data.status === "DECLINED") {
    statusText.textContent =
      "Оплату відхилено ❌ Спробуйте ще раз або інший спосіб.";
    if (data.failReason) {
      failRow.hidden = false;
      failReasonEl.textContent = data.failReason;
    }
  } else if (data.status === "CREATED") {
    statusText.textContent = "Платіж створено. Очікуємо підтвердження…";
  } else {
    statusText.textContent = `Статус: ${data.status}`;
  }
}

async function poll(orderReference) {
  const maxMs = 60_000;
  const stepMs = 2500;
  const started = Date.now();

  while (true) {
    const data = await fetchStatus(orderReference);
    renderStatus(data);

    if (data.status === "APPROVED" || data.status === "DECLINED") return;

    if (Date.now() - started > maxMs) {
      statusText.textContent =
        "Ще обробляємо платіж. Оновіть сторінку через кілька секунд.";
      return;
    }

    await new Promise((r) => setTimeout(r, stepMs));
  }
}

(async function init() {
  const order = getOrderReference();
  if (!order) {
    showError("orderReference не знайдено в URL.");
    return;
  }

  try {
    await poll(order);
  } catch (e) {
    console.error(e);
    showError(e.message || "Невідома помилка");
  }
})();
