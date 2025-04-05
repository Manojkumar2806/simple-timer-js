document.addEventListener('DOMContentLoaded', function() {
    const timerDisplay = document.getElementById('timerDisplay');
    const startBtn = document.getElementById('startBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const resetBtn = document.getElementById('resetBtn');
    const increaseBtn = document.getElementById('increaseBtn');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const statusText = document.getElementById('status');
    const minuteValue = document.getElementById('minuteValue');

    let timer;
    let minutes = 25;
    let seconds = 0;
    let isRunning = false;

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }


    function updateDisplay() {
        timerDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
    }


    function startTimer() {
        if (!isRunning) {
            isRunning = true;
            statusText.textContent = 'Running';
            statusText.className = 'text-success';

            timer = setInterval(function() {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(timer);
                        isRunning = false;
                        statusText.textContent = 'Time\'s up!';
                        statusText.className = 'text-danger';
                        return;
                    }
                    minutes--;
                    seconds = 59;
                } else {
                    seconds--;
                }
                updateDisplay();
            }, 1000);
        }
    }


    function pauseTimer() {
        if (isRunning) {
            clearInterval(timer);
            isRunning = false;
            statusText.textContent = 'Paused';
            statusText.className = 'text-warning';
        }
    }


    function resetTimer() {
        clearInterval(timer);
        minutes = parseInt(minuteValue.textContent);
        seconds = 0;
        isRunning = false;
        statusText.textContent = 'Stopped';
        statusText.className = 'text-primary';
        updateDisplay();
    }


    function increaseTime() {
        if (!isRunning && minutes < 60) {
            minutes++;
            minuteValue.textContent = minutes;
            updateDisplay();
        }
    }


    function decreaseTime() {
        if (!isRunning && minutes > 1) {
            minutes--;
            minuteValue.textContent = minutes;
            updateDisplay();
        }
    }


    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);
    increaseBtn.addEventListener('click', increaseTime);
    decreaseBtn.addEventListener('click', decreaseTime);


    updateDisplay();
});