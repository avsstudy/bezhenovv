document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("leadForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(form).entries());
  localStorage.setItem(
    "media_lead_demo",
    JSON.stringify({ data, at: new Date().toISOString() }),
  );

  toast.hidden = false;
  form.reset();
});
