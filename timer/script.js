const daysE1 = document.getElementById('days')
const hoursE1 = document.getElementById('hours')
const minutesE1 = document.getElementById('mins')
const secondsE1 = document.getElementById('seconds')

const newyears = "1 Jan 2022";

function countdown() {
    const newyearsdate = new Date(newyears);
    const currentdate = new Date();

    const seconds = (newyearsdate - currentdate) / 1000;
    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = Math.floor(seconds / 60) % 60;
    const second = Math.floor(seconds % 60);

    daysE1.innerHTML = days;
    hoursE1.innerHTML = hours;
    minutesE1.innerHTML = minutes;
    secondsE1.innerHTML = formatTime(second);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);