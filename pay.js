const STRAPI_BASE = "https://strapi-app-erk84.ondigitalocean.app";
const ENDPOINT_CHECKOUT = `${STRAPI_BASE}/api/payments/wayforpay/checkout-by-token`;
const ENDPOINT_STATUS = `${STRAPI_BASE}/api/payments/wayforpay/status-public`;

const TARIFFS = [
  {
    packageId: 2,
    id: "starter",
    title: "Початковий",
    subtitle: "Оптимальний для щоденної роботи бухгалтера",
    price: "299 грн/міс",
    note: "щомісячний платіж, з ПДВ",
    variant: "default",
    features: [
      "140+ онлайн-сесій з експертами",
      "200+ записів безплатних вебінарів",
      "Щотижневі відеоогляди новин",
      "48+ міні-курсів",
      "Інструкції та чеклисти",
      "Спільнота бухгалтерів у Telegram",
    ],
  },
  {
    packageId: 3,
    id: "base",
    title: "Базовий",
    subtitle: "Комплект must-have матеріалів з підтримкою експертів",
    price: "599 грн/міс",
    note: "щомісячний платіж, з ПДВ",
    variant: "default",
    expertPlus: true,
    features: [
      "140+ онлайн-сесій з експертами",
      "200+ записів безплатних вебінарів",
      "Щотижневі відеоогляди новин",
      "48+ міні-курсів",
      "Інструкції та чеклисти",
      "Спільнота бухгалтерів у Telegram",
    ],
  },
  {
    packageId: 4,
    id: "pro",
    title: "Професіонал",
    subtitle: "Максимум можливостей та персональні консультації експертів",
    price: "799 грн/міс",
    note: "щомісячний платіж, з ПДВ",
    variant: "top",
    features: [
      "140+ онлайн-сесій з експертами",
      "200+ записів безплатних вебінарів",
      "Щотижневі відеоогляди новин",
      "48+ міні-курсів",
      "Інструкції та чеклисти",
      "Спільнота бухгалтерів у Telegram",
    ],
  },
  {
    packageId: 5,
    id: "fop-pro",
    title: "ФОП Професіонал",
    subtitle: "Практичні матеріали та курси для бухгалтерів ФОП",
    price: "699 грн/міс",
    note: "щомісячний платіж, з ПДВ",
    variant: "fop",
    features: [
      "140+ онлайн-сесій з експертами",
      "200+ записів безплатних вебінарів",
      "Щотижневі відеоогляди новин",
      "48+ міні-курсів",
      "Інструкції та чеклисти",
      "Спільнота бухгалтерів у Telegram",
      "Відповіді експертів до 2 робочих днів",
      "5 комплексних курсів (ФОП)",
      "Сертифікати про проходження навчання",
    ],
  },
];

const BONUS_SLOTS = [
  {
    id: "docs",
    count: "200+",
    desc: "Щотижневе наповнення (бланки та зразки)",
    iconSrc: "/assets/bnr-docs.png",
    iconW: 120,
    iconH: 24,
  },
  {
    id: "law",
    count: "50+",
    desc: "Щотижневе наповнення",
    iconSrc: "/assets/bnr-norm.png",
    iconW: 173,
    iconH: 24,
  },
  {
    id: "guides",
    count: "20+",
    desc: "Щотижневе наповнення",
    iconSrc: "/assets/bnr-handbook.png",
    iconW: 116,
    iconH: 24,
  },
  {
    id: "ipk",
    count: "50+",
    desc: "Щотижневе наповнення",
    iconSrc: "/assets/bnr-ipk.png",
    iconW: 141,
    iconH: 24,
  },
  {
    id: "news",
    count: "100+",
    desc: "Щоденне наповнення",
    iconSrc: "/assets/bnr-news.png",
    iconW: 201,
    iconH: 24,
  },
  {
    id: "answers",
    count: "30 000+",
    desc: "Щоденне наповнення",
    iconSrc: "/assets/bnr-answers.png",
    iconW: 208,
    iconH: 24,
  },
];

const REVIEWS = [
  {
    id: "1",
    name: "Людмила Д.",
    avatarSrc: "/assets/avatar-1.png",
    rating: 5,
    text: "Мені здавалося, що я непогано орієнтуюся в Excel, але коли потрібно було скласти звітність — завжди були нерви. Не зводилися дані, в формулах помилки. Звіти були складні, власник їх не розумів, а я не могла пояснити простими словами, що відбувається з грошима.",
  },
  {
    id: "2",
    name: "Ірина К.",
    avatarSrc: "/assets/avatar-2.png",
    rating: 5,
    text: "У нас у ресторані все було на довірі. Облік вівся в зошитах і Excel, все плуталося, інвентаризації — той ще стрес. Скільки списали, скільки продали — записували вручну або взагалі не фіксували. Я вже не знала, як це контролювати.",
  },
  {
    id: "3",
    name: "Людмила Д.",
    avatarSrc: "/assets/avatar-1.png",
    rating: 5,
    text: "Мені здавалося, що я непогано орієнтуюся в Excel, але коли потрібно було скласти звітність — завжди були нерви...",
  },
];

const FAQ = [
  {
    id: "q1",
    question: "У мене буде можливість ставити питання експертам?",
    answer:
      "Так, ви зможете зручно отримувати зворотний зв’язок — усе залежить від пакета, який ви оберете.\n" +
      "- Пакет «Помічник» — можливість ставити запитання під час онлайн-сесій.\n" +
      "- Пакет «Експерт» — ставте стільки завгодно питань у сервісі та отримуйте відповіді від експертів.\n" +
      "- Пакет «Професіонал» — доступ до гарячої лінії: експерт надасть швидку консультацію впродовж двох робочих днів.",
  },
  {
    id: "q2",
    question: "Що таке «База знань» і чим вона корисна звичайному бухгалтеру?",
    answer:
      "Це структуровані матеріали, інструкції та приклади, які допомагають швидко знайти відповідь і застосувати її на практиці.",
  },
  {
    id: "q3",
    question: "Я — єдиний бухгалтер у компанії. Чи буде сервіс корисним?",
    answer:
      "Так. Ви отримуєте підтримку, матеріали та готові рішення, які економлять час і зменшують ризик помилок.",
  },
  {
    id: "q4",
    question: "Я — ФОП. Чи потрібен мені цей сервіс?",
    answer:
      "Так. Ви отримуєте підтримку, матеріали та готові рішення, які економлять час і зменшують ризик помилок.",
  },
  {
    id: "q5",
    question: "Чи можу я оплачувати сервіс щомісяця?",
    answer:
      "Так. Ви отримуєте підтримку, матеріали та готові рішення, які економлять час і зменшують ризик помилок.",
  },
  {
    id: "q6",
    question: "Чи потрібен комп’ютер для користування сервісом?",
    answer:
      "Так. Ви отримуєте підтримку, матеріали та готові рішення, які економлять час і зменшують ризик помилок.",
  },
];

const payBtn = document.getElementById("payBtn");
const payArrowWhite = document.getElementById("payArrowWhite");
const payArrowBlack = document.getElementById("payArrowBlack");

const tariffCard = document.getElementById("tariffCard");
const badgeTop = document.getElementById("badgeTop");
const badgeFop = document.getElementById("badgeFop");

const tariffTitle = document.getElementById("tariffTitle");
const tariffSubtitle = document.getElementById("tariffSubtitle");
const tariffPrice = document.getElementById("tariffPrice");
const tariffNote = document.getElementById("tariffNote");
const payHint = document.getElementById("payHint");

const featuresList = document.getElementById("featuresList");
const expertPlusBlock = document.getElementById("expertPlusBlock");
const topExtras = document.getElementById("topExtras");
const fopExtras = document.getElementById("fopExtras");

const errorBox = document.getElementById("errorBox");
const errorText = document.getElementById("errorText");

function showError(msg) {
  errorText.textContent = msg;
  errorBox.hidden = false;

  payBtn.disabled = true;
  payBtn.textContent = "Помилка";
}

function getToken() {
  const params = new URLSearchParams(location.search);
  return params.get("token");
}

async function postJson(url, body) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`${url} failed: ${res.status} ${text}`);
  }
  return res.json();
}

async function getJson(url) {
  const res = await fetch(url, { method: "GET" });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`${url} failed: ${res.status} ${text}`);
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

function setVariant(variant) {
  tariffCard.classList.remove("tariff-default", "tariff-top", "tariff-fop");
  badgeTop.hidden = true;
  badgeFop.hidden = true;
  topExtras.hidden = true;
  fopExtras.hidden = true;

  payArrowWhite.hidden = false;
  payArrowBlack.hidden = true;

  if (variant === "top") {
    tariffCard.classList.add("tariff-top");
    badgeTop.hidden = false;
    topExtras.hidden = false;
    payArrowWhite.hidden = true;
    payArrowBlack.hidden = false;
  } else if (variant === "fop") {
    tariffCard.classList.add("tariff-fop");
    badgeFop.hidden = false;
    fopExtras.hidden = false;
  } else {
    tariffCard.classList.add("tariff-default");
  }
}

function renderFeatures(list) {
  featuresList.innerHTML = "";
  list.forEach((txt) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = "/subscription/tick.svg";
    img.width = 16;
    img.height = 16;
    img.alt = "";
    li.appendChild(img);

    const span = document.createElement("span");
    span.textContent = txt;
    li.appendChild(span);

    featuresList.appendChild(li);
  });
}

function renderTariffFromCatalog(pkgId, fallbackTitle, amountUAH, currency) {
  const t = TARIFFS.find((x) => x.packageId === pkgId);

  const title = t ? t.title : fallbackTitle || "Підписка";
  const subtitle = t ? t.subtitle : "";
  const price = t ? t.price : `${amountUAH} ${currency}`;
  const note = t ? t.note : "оплата, з ПДВ";

  tariffTitle.textContent = title;
  tariffSubtitle.textContent = subtitle;
  tariffPrice.textContent = price;
  tariffNote.textContent = note;

  if (t) {
    setVariant(t.variant);
    renderFeatures(t.features);
    expertPlusBlock.hidden = !t.expertPlus;
  } else {
    setVariant("default");
    renderFeatures([]);
    expertPlusBlock.hidden = true;
  }
}

function renderBonus() {
  const wrap = document.getElementById("bonusSlots");
  wrap.innerHTML = BONUS_SLOTS.map(
    (it) => `
    <div class="bonus-slot">
      <img class="bonus-slot__ico" src="${it.iconSrc}" alt="" width="${it.iconW}" height="${it.iconH}">
      <div class="bonus-slot__count">${it.count}</div>
      <p class="bonus-slot__desc typo-l">${it.desc}</p>
    </div>
  `,
  ).join("");
}

function cardsPerView() {
  const w = window.innerWidth;
  if (w >= 1600) return 3;
  if (w >= 768) return 2;
  return 1;
}

function starsHtml(n) {
  return Array.from({ length: 5 })
    .map((_, i) => `<span class="${i < n ? "star-on" : "star-off"}">★</span>`)
    .join("");
}

function renderReviews() {
  const track = document.getElementById("reviewsTrack");
  const prevBtn = document.getElementById("reviewsPrev");
  const nextBtn = document.getElementById("reviewsNext");

  let perView = cardsPerView();
  let page = 0;

  function build() {
    perView = cardsPerView();
    page = 0;
    const totalPages = Math.max(1, Math.ceil(REVIEWS.length / perView));

    const pages = Array.from({ length: totalPages }).map((_, p) => {
      const start = p * perView;
      const chunk = REVIEWS.slice(start, start + perView);

      const cards = chunk
        .map(
          (r) => `
        <article class="review-card">
          <div class="review-top">
            <span class="avatar"><img src="${r.avatarSrc}" alt="" width="48" height="48"></span>
            <div>
              <div class="fw700">${r.name}</div>
              <div class="stars">${starsHtml(r.rating)}</div>
            </div>
          </div>
          <p class="review-text">${r.text}</p>
        </article>
      `,
        )
        .join("");

      const gridStyle =
        perView === 1
          ? ""
          : perView === 2
            ? "style='display:flex; gap:16px;'"
            : "style='display:flex; gap:16px;'";

      return `
        <div class="review-page">
          <div class="review-grid" ${gridStyle}>
            ${cards}
          </div>
        </div>
      `;
    });

    track.innerHTML = pages.join("");

    function update() {
      track.style.transform = `translateX(-${page * 100}%)`;
      prevBtn.disabled = page <= 0;
      nextBtn.disabled = page >= totalPages - 1;
    }

    prevBtn.onclick = () => {
      if (page > 0) {
        page -= 1;
        update();
      }
    };
    nextBtn.onclick = () => {
      if (page < totalPages - 1) {
        page += 1;
        update();
      }
    };

    update();
  }

  build();
  window.addEventListener("resize", () => build(), { passive: true });
}

function parseAnswer(answer) {
  const lines = answer
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  const bullets = lines
    .filter((l) => /^[-•]/.test(l))
    .map((l) => l.replace(/^[-•]\s*/, ""));

  const paragraphs = lines.filter((l) => !/^[-•]/.test(l));
  return { paragraphs, bullets };
}

function renderFAQ() {
  const list = document.getElementById("faqList");
  let openIndex = 0;

  function itemHtml(item, index) {
    const isOpen = index === openIndex;
    const { paragraphs, bullets } = parseAnswer(item.answer);

    const pHtml = paragraphs
      .map((p, i) => `<p${i ? " style='margin-top:8px;'" : ""}>${p}</p>`)
      .join("");
    const bHtml = bullets.length
      ? `<ul>${bullets.map((b) => `<li>${b}</li>`).join("")}</ul>`
      : "";

    return `
      <div class="faq-item ${isOpen ? "open" : ""}" data-idx="${index}">
        <button class="faq-q" type="button">
          <span class="typo-h3 faq-question">${item.question}</span>
          <span class="faq-icon">
            <img src="${isOpen ? "/assets/cross-close.svg" : "/assets/cross-open.svg"}" alt="" width="20" height="20">
          </span>
        </button>
        ${isOpen ? `<div class="faq-a">${pHtml}${bHtml}</div>` : ""}
      </div>
    `;
  }

  function render() {
    list.innerHTML = FAQ.map((it, idx) => itemHtml(it, idx)).join("");
    list.querySelectorAll(".faq-q").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const wrap = e.currentTarget.closest(".faq-item");
        const idx = Number(wrap.getAttribute("data-idx"));
        openIndex = openIndex === idx ? -1 : idx;
        render();
      });
    });
  }

  render();
}

(async function init() {
  renderBonus();
  renderReviews();
  renderFAQ();

  const token = getToken();
  if (!token) {
    showError(
      "Токен не знайдено в URL. Відкрийте посилання з сайту з тарифами.",
    );
    payHint.textContent = "Нема токена в URL.";
    return;
  }

  try {
    payHint.textContent = "Готуємо дані для оплати…";
    payBtn.disabled = true;
    payBtn.textContent = "Завантаження…";

    const checkout = await postJson(ENDPOINT_CHECKOUT, { token });

    if (checkout.status && checkout.status !== "CREATED") {
      const order = encodeURIComponent(checkout.orderReference || "");
      location.href = `./result.html?order=${order}`;
      return;
    }

    const orderRef = checkout.orderReference;
    const amount = checkout?.display?.amount || checkout?.fields?.amount || "";
    const currency =
      checkout?.display?.currency || checkout?.fields?.currency || "UAH";
    const fallbackTitle = checkout?.display?.packageTitle || "";

    let pkgId = null;
    try {
      const st = await getJson(
        `${ENDPOINT_STATUS}?orderReference=${encodeURIComponent(orderRef)}`,
      );
      pkgId = st?.package?.id ?? null;
    } catch (_) {}

    renderTariffFromCatalog(pkgId, fallbackTitle, amount, currency);

    payHint.textContent = `До сплати: ${amount} ${currency}. Після натискання ви перейдете на WayForPay.`;

    payBtn.disabled = false;
    payBtn.innerHTML = `Оплатити
      <img id="payArrowWhite2" src="/assets/arrow-right-white.svg" alt="" width="20" height="20">
    `;

    if (tariffCard.classList.contains("tariff-top")) {
      payBtn.innerHTML = `Оплатити
        <img src="/assets/arrow-right-black.svg" alt="" width="20" height="20">
      `;
    }

    payBtn.addEventListener("click", () => {
      submitWayForPay(checkout.actionUrl, checkout.fields);
    });
  } catch (e) {
    console.error(e);
    showError(e?.message || "Невідома помилка");
  }
})();
