// Letter-by-letter animation (optional but cute)
function typeText(id, delay = 60) {
  const el = document.getElementById(id);
  const text = el.innerText;
  el.innerText = "";
  let i = 0;

  const interval = setInterval(() => {
    if (i < text.length) {
      el.innerText += text[i++];
    } else {
      clearInterval(interval);
    }
  }, delay);
}

window.onload = () => {
  setTimeout(() => {
    typeText("mainText", 100);
    setTimeout(() => typeText("subText", 40), 2000);
  }, 800);
};
