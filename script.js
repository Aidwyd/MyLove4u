function typeText(id, speed = 60) {
  const el = document.getElementById(id);
  const fullText = el.innerText;
  el.innerText = "";

  let i = 0;
  const interval = setInterval(() => {
    el.innerText += fullText.charAt(i);
    i++;
    if (i === fullText.length) {
      clearInterval(interval);
    }
  }, speed);
}

window.onload = () => {
  setTimeout(() => {
    typeText("mainText", 100);
    setTimeout(() => {
      typeText("subText", 45);
    }, 1800);
  }, 1000);
};
