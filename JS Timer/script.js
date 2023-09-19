
const box = document.querySelector("#box");

const display = document.querySelector("#display");

const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");

const start = document.querySelector("#start");
const reset = document.querySelector("#reset");
const pause = document.querySelector("#pause");



var Interval = null;
var total = 0;



totalValue = () => {

    total = (Number(hours.value) * 3600) + (Number(minutes.value) * 60) + (Number(seconds.value));
}

function timer() {
    totalValue();
    total--;
    if (total >= 0) {
        var hr = Math.floor(total / 3600);
        var min = Math.floor((total / 60) - (hr * 60));
        var sec = total - ((hr * 3600) + (min * 60));

        hours.value = hr;
        minutes.value = min;
        seconds.value = sec;

    } else {
        display.innerText = "Time Out"
    }
}

let flag = false;

start.addEventListener("click", () => {

    if(flag == false) {
        interval = setInterval(timer, 1000);
    
        display.innerText = "Timer Started";

        flag = true;

    }




})



pause.addEventListener("click", () => {
    clearInterval(interval);
})

reset.addEventListener("click", () => {
    hours.value = "";
    minutes.value = "";
    seconds.value = "";

})
