let newYear = "1 Jan 2022";
let newYearDate = new Date(newYear);
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function countdown(){
    let currentDate = new Date();
    let totalSeconds = (newYearDate - currentDate)/1000;

    let days = Math.floor(totalSeconds / 3600 / 24);
    let hours = Math.floor(totalSeconds / 3600) % 24;
    let minutes = Math.floor(totalSeconds / 60) % 60;
    let seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
   
}

function formatTime(time){
    return (time < 10) ? (`0${time}`) : time;
 }

countdown();
setInterval(countdown,1000);