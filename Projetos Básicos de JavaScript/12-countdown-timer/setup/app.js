const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

// let futureDate = new Date(2020, 3, 24, 11, 30, 0);

const futureTime = futureDate.getTime();

translator(futureDate);

function translator(array) {
  const year = array.getFullYear();

  const month = months[array.getMonth()];

  let weekday = array.getDay();
  weekday = weekdays[weekday];

  const day = array.getDate();
  const hours = array.getHours();
  let mins = array.getMinutes();

  let fullHour = `${hours}:${minsCorrector()}`;

  if (hours < 12) {
    fullHour += `am`;
  } else {
    fullHour += `pm`;
  }

  giveaway.innerHTML = `Giveaway Ends On ${weekday}, ${day} ${month} ${year}, ${fullHour}`;

  function minsCorrector() {
    if (mins < 10) {
      return `0` + mins;
    } else {
      return mins;
    }
  }
}

// future time in ms

function getRemainingTime() {
  const currentTime = new Date().getTime();
  const t = futureTime - currentTime;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSec = 1000;

  // =============== days ===============
  let days = t / oneDay; // vai voltar um valor quebrado, então precisamos arredondadar
  days = Math.floor(days);

  // =============== hours ===============
  let hours = Math.floor((t % oneDay) / oneHour); // não queremos dividir o valor total, então vamos pegar a sobra da última conta e esse valor é dividido para obtermos as horas

  // =============== minutes ===============
  let mins = Math.floor((t % oneHour) / oneMinute);

  // =============== secs ===============
  let secs = Math.floor((t % oneMinute) / oneSec);

  // 1s = 1000ms
  // 1min = 60.000
  // 1hr = 3.600.000
  // 1d = 86.400.000

  // set values array
  const values = [days, hours, mins, secs];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }

  items.forEach(function (item, index) {
    // uma função que vai iterar sobre todos os <h4>,
    item.innerHTML = values[index];
    console.log(item);
  });
  
  if (t < 0) {
    clearInterval(countdow);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}
// countdow
let countdow = setInterval(getRemainingTime, 1000);

getRemainingTime();
