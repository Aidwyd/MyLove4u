// Text lines to show in sequence
const messages = [
  { id: "line1", text: "H i   M i   A m o r", delay: 100, font: "great-vibes" }, // spaced out
  { id: "line2", text: "I made this for you, to show how much I love and adore you", delay: 35, font: "poppins" },
  { id: "line3", text: "I <3 you Alex", delay: 50, font: "poppins" },
  { id: "line4", text: "Enjoy!", delay: 70, font: "poppins" }
];

function typeWriter(el, text, speed = 50) {
  return new Promise(resolve => {
    el.innerText = "";
    let i = 0;
    let interval = setInterval(() => {
      el.innerText += text.charAt(i);
      i++;
      if (i === text.length) {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  });
}

async function animateTextSequence() {
  for (let i = 0; i < messages.length; i++) {
    const line = document.getElementById(messages[i].id);
    line.className = `animated-text ${messages[i].font} fade-in-up`;
    await typeWriter(line, messages[i].text, messages[i].delay);
    await new Promise(r => setTimeout(r, 1000)); // pause after line typed
  }

  // After last line, start cinematic pull-up & show starfield
  const scene = document.getElementById("scene");
  scene.classList.add("up");

  // Show starfield after animation ends (2s)
  setTimeout(() => {
    document.getElementById("starfield").style.top = "0";
  }, 2000);
}

// Shooting star every 15 seconds
function shootingStarCycle() {
  const star = document.getElementById("shooting-star");

  function shoot() {
    star.classList.add("shooting");
    setTimeout(() => {
      star.classList.remove("shooting");
    }, 1200);
  }

  shoot();
  setInterval(shoot, 15000);
}

window.onload = () => {
  animateTextSequence();
  shootingStarCycle();
};
