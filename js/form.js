// form.js — полностью рабочий
// URL твоего Google Apps Script
const scriptURL = 'https://script.google.com/macros/s/AKfycbyj3P_5iAh9AuI_R5mSPs7JAnKD0XIED-SMnB7lidF9Csfx8X4uhR9p4wBld_j0Uw3cpw/exec';

// Получаем форму по ID
const form = document.getElementById('requestForm');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault(); // предотвращаем стандартную отправку формы

    const formData = new FormData(form);

    // Отправка данных на Google Script
    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => {
        alert('✅ Заявка успешно отправлена!'); // уведомление
        form.reset(); // очистка формы
      })
      .catch(error => {
        alert('❌ Ошибка при отправке. Попробуйте позже.');
        console.error('Error!', error.message);
      });
  });
} else {
  console.error('Форма с id="requestForm" не найдена на странице');
}
