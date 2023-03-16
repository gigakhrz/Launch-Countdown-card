
//update time in html, so here is html h2 tegs.
const daysInHtml = document.getElementById("days");
const hoursInHtml= document.getElementById("hours");
const minutesInHtml = document.getElementById("minutes");
const secondsInHtml = document.getElementById("seconds");

// count down date
const countDownDate = new Date("June 21, 2023 23:00:59").getTime();

const updateInHtml = setInterval (() => {

    //curent time
    const now = new Date().getTime();

    // time remaining
    const distance = countDownDate - now;

    // Calculate days, hours, minutes and seconds remaining
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds1 = Math.floor((distance % (1000 * 60)) / 1000);

    //update digitns in the html
    daysInHtml.innerHTML =  String(days).padStart(2, "0");
    hoursInHtml.innerHTML =  String(hours).padStart(2, "0");
    minutesInHtml.innerHTML = String(minutes).padStart(2, "0");
    secondsInHtml.innerHTML = String(seconds1).padStart(2, "0");

    if (distance <= 0) {
        daysInHtml.innerHTML = "00";
        hoursInHtml.innerHTML = "00";
        minutesInHtml.innerHTML = "00";
        secondsInHtml.innerHTML = "00";
    }
}, 1000)