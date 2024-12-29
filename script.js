let timer;
let time = 0; 

const updateDisplay = () => {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  document.getElementById('milliseconds').textContent = String(milliseconds).padStart(2, '0');
};

const startTimer = () => {
  if (!timer) {
    timer = setInterval(() => {
      time += 10;
      updateDisplay();
    }, 10);
  }
};

const pauseTimer = () => {
  clearInterval(timer);
  timer = null;
};

const resetTimer = () => {
  clearInterval(timer);
  timer = null;
  time = 0;
  updateDisplay();
  document.getElementById('laps-list').innerHTML = '';
};

const addLap = () => {
  const lapTime = document.getElementById('minutes').textContent + ':' +
                  document.getElementById('seconds').textContent + ':' +
                  document.getElementById('milliseconds').textContent;
  const li = document.createElement('li');
  li.textContent = `Lap ${document.getElementById('laps-list').children.length + 1}: ${lapTime}`;
  document.getElementById('laps-list').appendChild(li);
};

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', addLap);
