const scene = document.getElementById('scene');
const cord = document.getElementById('cord');
const lampWrap = document.getElementById('lampWrap');
const loginPanel = document.getElementById('loginPanel');
let isOn = true;

function toggleLamp(){
  isOn = !isOn;
  scene.classList.toggle('off', !isOn);
  cord.classList.remove('pulled');
  lampWrap.classList.remove('swing');
  loginPanel.classList.remove('float-in');
  void cord.offsetWidth;
  cord.classList.add('pulled');
  lampWrap.classList.add('swing');
  if(isOn) loginPanel.classList.add('float-in');
}
cord.addEventListener('click', toggleLamp);

scene.addEventListener('mousemove', (e)=>{
  const x = (e.clientX / window.innerWidth - .5) * 10;
  const y = (e.clientY / window.innerHeight - .5) * 10;
  document.documentElement.style.setProperty('--mx', x+'px');
  document.documentElement.style.setProperty('--my', y+'px');
  lampWrap.style.translate = `${x * .7}px ${y * .35}px`;
  loginPanel.style.translate = `${x * -.45}px ${y * -.25}px`;
});
