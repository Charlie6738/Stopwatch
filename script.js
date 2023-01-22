var stopwatch;

function start() {
    document.querySelector(".startButton").disabled = true;
    document.querySelector(".stopButton").disabled = false;
    document.querySelector(".resetButton").disabled = true;

    stopwatch = setTimeout(update,1000);
}

function update() {
    let hours = parseInt(document.querySelector(".hours").value);
    let minutes = parseInt(document.querySelector(".minutes").value);
    let seconds = parseInt(document.querySelector(".seconds").value);

    seconds++;
    if (seconds > 59) { minutes++; seconds -= 60; }
    if (minutes > 59) { hours++; minutes -= 60; }
    if (hours > 99) { stop(); reset(); }

    document.querySelector(".hours").value = hours;
    document.querySelector(".minutes").value = minutes;
    document.querySelector(".seconds").value = seconds;

    stopwatch = setTimeout(update,1000);
}

function stop() {
    document.querySelector(".startButton").disabled = false;
    document.querySelector(".stopButton").disabled = true;
    document.querySelector(".resetButton").disabled = false;

    clearTimeout(stopwatch);
}

function reset() {
    document.querySelector(".startButton").disabled = false;
    document.querySelector(".stopButton").disabled = true;
    document.querySelector(".resetButton").disabled = true;

    document.querySelector(".hours").value = 0;
    document.querySelector(".minutes").value = 0;
    document.querySelector(".seconds").value = 0;
}