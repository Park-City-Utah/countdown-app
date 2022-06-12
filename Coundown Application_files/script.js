const newYears = new Date("1 Jan, 2023");

function countDown() {
    console.log(newYears);
}

//Initial
countDown();
//Interval
setInterval(countDown, 1000);