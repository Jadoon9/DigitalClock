const clock = document.querySelector("#clock");
const date = document.querySelector("#date");

const showTime = () => {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const time = new Date();
  let day = time.getDay();
  day = days[day - 1];

  let hours = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let am_pm = "AM";

  if (hours > 12) {
    hours -= 12;
    am_pm = "PM";
  } else {
    am_pm = "AM";
  }

  hours = hours < 10 ? "0" + hours : hours;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  date.innerHTML = clock.innerHTML =
    time.getFullYear() +
    ":" +
    (time.getMonth() + 1) +
    ":" +
    time.getDate() +
    ":" +
    day;

  clock.innerHTML = hours + ":" + min + ":" + sec + ":" + am_pm;
};

setInterval(showTime, 1000);
