const items = document.querySelectorAll('.countdown-item > h3');

// Назначаем дату отсчёта (17 мая 2025, 23:59:59)
let countdownDate = new Date(2028, 4, 17, 5, 58, 59).getTime();

function updateCountdown() {
  // Текущее время
  const currentTime = new Date().getTime();
  // Разница времени
  const distance = countdownDate - currentTime;

  // Константы времени (в миллисекундах)
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  // Расчёт дней, часов, минут, секунд
  const days = Math.floor(distance / oneDay);
  const hours = Math.floor((distance % oneDay) / oneHour);
  const minutes = Math.floor((distance % oneHour) / oneMinute);
  const seconds = Math.floor((distance % oneMinute) / oneSecond);

  // Обновление элементов на странице
  const timeValues = [days, hours, minutes, seconds];
  items.forEach((item, index) => {
    item.textContent = timeValues[index];
  });

  // Если время вышло
  if (distance < 0) {
    clearInterval(timer);
    items.forEach((item) => (item.textContent = '0'));
    alert('Акция завершена');
  }
}

const timer = setInterval(updateCountdown, 1000);
