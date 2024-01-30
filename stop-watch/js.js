let timerInterval;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function start() {
    if (!timerInterval) {
        timerInterval = setInterval(updateTimer, 10); // Update every 10 milliseconds
    }
}

function stop() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function reset() {
    clearInterval(timerInterval);
    timerInterval = null;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
}

function updateTimer() {
    milliseconds++;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('timer-display');
    display.textContent = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds) + ":" + padMilliseconds(milliseconds);
}

function pad(number) {
    return (number < 10) ? "0" + number : number;
}

function padMilliseconds(number) {
    if (number < 10) {
        return "00" + number;
    } else if (number < 100) {
        return "0" + number;
    } else {
        return number;
    }
}
