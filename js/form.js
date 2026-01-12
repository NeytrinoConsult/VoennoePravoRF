// URL твоего веб-приложения Google Apps Script
const FORM_URL = "https://script.google.com/macros/s/AKfycbyj3P_5iAh9AuI_R5mSPs7JAnKD0XIED-SMnB7lidF9Csfx8X4uhR9p4wBld_j0Uw3cpw/exec";

document.getElementById("requestForm").addEventListener("submit", function(e) {
    e.preventDefault();
    // Показываем модальное окно согласия
    document.getElementById("consentModal").style.display = "flex";
});

function acceptConsent() {
    // Пользователь согласился
    document.getElementById("consentModal").style.display = "none";

    const form = document.getElementById("requestForm");
    const data = new FormData(form);

    // Отправляем все поля, включая новый комментарий
    fetch(FORM_URL, {
        method: "POST",
        body: data
    })
    .then(response => response.json())
    .then(json => {
        if (json.result === "success") {
            alert("Заявка успешно отправлена! Мы свяжемся с вами.");
            form.reset();
        } else {
            alert("Ошибка отправки: " + (json.error || ""));
        }
    })
    .catch(err => {
        alert("Ошибка соединения: " + err);
    });
}
