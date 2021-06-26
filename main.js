const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secEl = document.getElementById("sec");

const happyBirthDay = "17 july 2021";

function countdown() {
    const happyBirthDayDate = new Date(happyBirthDay)
    const currentDate = new Date();

    const totalSeconds = (happyBirthDayDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

daysEl.innerHTML = days;
hoursEl.innerHTML = hours;
minsEl.innerHTML = minutes;
secEl.innerHTML = seconds;
}

// initial call 
countdown();

setInterval(countdown,1000);