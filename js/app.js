// Select element
const clock = document.querySelector(".clock");

// Run clock
const runClock = () => {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  let session = "AM";

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  const time = `${h}:${m}:${s} ${session}`;

  clock.textContent = time;
};

// Set clock running
setInterval(() => {
  runClock();
}, 1000);
