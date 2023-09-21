// countdown js

// countdown

const flashDay = "Sun October 31 2023 11:52:06";
const daysDiv = document.getElementById("days");
const hoursDiv = document.getElementById("hours");
const minuteDiv = document.getElementById("minute");
const secondsDiv = document.getElementById("seconds");

function contDown() {
  const flashCount = new Date(flashDay);
  const currentDay = new Date();

  const totalTime = (flashCount - currentDay) / 1000;
  const totalDays = Math.max(0, Math.floor(totalTime / 86400));
  const totalHours = Math.max(0, Math.floor((totalTime / 3600) % 24));
  const totalMinutes = Math.max(0, Math.floor((totalTime / 60) % 60));
  const totalSeconds = Math.max(0, Math.floor(totalTime % 60));

  daysDiv.innerText = totalDays;
  hoursDiv.innerText = totalHours;
  minuteDiv.innerText = totalMinutes;
  secondsDiv.innerText = totalSeconds;

  if (totalTime <= 0) {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(contDown, 1000);