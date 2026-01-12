const FORM_URL = "URL_ВЕБ_ПРИЛОЖЕНИЯ";
let consent = false;

document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("consentModal").style.display = "flex";
});

function acceptConsent() {
  consent = true;
  document.getElementById("consentModal").style.display = "none";

  const form = document.getElementById("requestForm");
  const data = new FormData(form);

  fetch(FORM_URL, { method: "POST", body: data })
    .then(() => alert("Заявка отправлена"))
    .then(() => form.reset());
}

