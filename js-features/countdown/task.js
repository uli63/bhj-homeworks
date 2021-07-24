//task 1

const startTimer = function() {
  const timerCount = document.getElementById("timer");
  timer.textContent --;
  if (timer.textContent < 0)  {
    clearInterval(startTimer);
    alert('Вы победили в конкурсе!');
  }
} 

setInterval(startTimer, 1000);