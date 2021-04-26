const newyears = "1 Jan 2022";

function countdown() {
    const newyearsdate = new Date(newyears);
    const currentdate = new Date();

    const seconds = (newyearsdate - currentdate) / 1000;
    const days = Math.floor(seconds / 3600 / 24);
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = Math.floor(seconds / 60) % 60;
    const second = Math.floor(seconds % 60);

    console.log(days, hours, minutes, second);
}

countdown();

setInterval(countdown, 1000);