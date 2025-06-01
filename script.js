const canvas = document.getElementById('sky');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
const numStars = 200;

for (let i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5 + 0.5,
    alpha: Math.random(),
    delta: Math.random() * 0.02
  });
}

function drawSky() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let s of stars) {
    ctx.beginPath();
    ctx.globalAlpha = s.alpha;
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();

    s.alpha += s.delta;
    if (s.alpha <= 0 || s.alpha >= 1) {
      s.delta = -s.delta;
    }
  }

  requestAnimationFrame(drawSky);
}

drawSky();
