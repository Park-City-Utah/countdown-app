const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');


const newYears = new Date("1 Jan, 2023");

function countDown() {
    currentDate = new Date();
    secondsLeft = (newYears - currentDate) / 1000;
    days = Math.floor(secondsLeft/60/60/24);
    hours = Math.floor(secondsLeft/60/60%24);
    minutes = Math.floor(secondsLeft/60/60%60);
    seconds = Math.floor(secondsLeft%60);
    console.log(days, hours, minutes, seconds);

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;  
}

//Initial
countDown();
//Interval
setInterval(countDown, 1000);