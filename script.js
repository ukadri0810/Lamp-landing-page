const stage = document.getElementById('stage');
const toggle = document.getElementById('toggleLamp');

toggle.addEventListener('click', () => {
  stage.classList.toggle('on');
});
