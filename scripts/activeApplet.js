const elClock = document.querySelector("[data-clock]");

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

window.onload = displayClock();
function displayClock() {
  var fullDate = new Date();
  const dayNum = fullDate.getDay();
  const day = days[dayNum];
  const monthNum = fullDate.getMonth();
  const month = months[monthNum];
  const date = fullDate.getDate();
  let hour = fullDate.getHours();
  let minute = fullDate.getMinutes();
  hour = (hour < 10 ? "0" : "") + hour;
  minute = (minute < 10 ? "0" : "") + minute;
  elClock.innerHTML = `${day} ${month} ${date} ${hour}:${minute}`;

  setTimeout(displayClock, 1000);
}
