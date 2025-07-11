const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 2;

let stars = [];

for (let i = 0; i < 300; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5,
    alpha: Math.random(),
    delta: Math.random() * 0.02 + 0.005
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let s of stars) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(255, 255, 255, ${s.alpha})`;
    ctx.fill();
    s.alpha += s.delta;
    if (s.alpha <= 0 || s.alpha >= 1) s.delta *= -1;
  }
  requestAnimationFrame(drawStars);
}

drawStars();

// Shooting Star every 15s
setInterval(() => {
  let sx = Math.random() * canvas.width;
  let sy = Math.random() * canvas.height / 2;
  let length = 300;
  let opacity = 1;

  function shoot() {
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(sx - length, sy + length / 2);
    ctx.strokeStyle = `rgba(255,255,255,${opacity})`;
    ctx.lineWidth = 2;
    ctx.stroke();

    sx -= 10;
    sy += 5;
    opacity -= 0.02;

    if (opacity > 0) requestAnimationFrame(shoot);
  }

  shoot();
}, 15000);
