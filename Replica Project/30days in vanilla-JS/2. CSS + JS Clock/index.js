const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const textTimer = document.querySelector('.textTime');

function setDate() {
  const date = new Date();

  const second = date.getSeconds();
  const secondDegrees = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const mins = date.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = date.getHours();
  const hourDegrees = (hour / 60) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  textTimer.innerHTML = `${hour}시 ${mins}분 ${second}초`;
}

setInterval(setDate, 1000);
