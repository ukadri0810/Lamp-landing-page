const app = document.getElementById('app');
const cord = document.getElementById('cord');
const lampWrap = document.getElementById('lampWrap');
const loginSide = document.getElementById('loginSide');
let isOn = true;

function restartAnimation(element, className) {
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
}

function toggleLamp() {
  isOn = !isOn;
  app.classList.toggle('is-on', isOn);
  restartAnimation(cord, 'pulled');
  restartAnimation(lampWrap, 'swing');
  if (isOn) restartAnimation(loginSide, 'show');
}

cord.addEventListener('click', toggleLamp);
cord.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') toggleLamp();
});

window.addEventListener('mousemove', (event) => {
  if (window.innerWidth < 900) return;
  const x = (event.clientX / window.innerWidth - 0.5) * 12;
  const y = (event.clientY / window.innerHeight - 0.5) * 10;
  lampWrap.style.translate = `${x * 0.55}px ${y * 0.25}px`;
  loginSide.style.translate = `${x * -0.35}px ${y * -0.2}px`;
});
