const tabs = document.querySelectorAll('.day-tab');
const panels = document.querySelectorAll('.day-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.day).classList.add('active');
    window.scrollTo({ top: document.querySelector('.day-tabs').offsetTop - 8, behavior: 'smooth' });
  });
});

const checkboxes = [...document.querySelectorAll('.exercise input')];
checkboxes.forEach((box, index) => {
  const key = `active24-check-${index}`;
  box.checked = localStorage.getItem(key) === 'true';
  box.addEventListener('change', () => localStorage.setItem(key, box.checked));
});

let timer = null;
let remaining = 60;
const display = document.getElementById('timerDisplay');

function drawTimer() {
  const min = Math.floor(remaining / 60).toString().padStart(2, '0');
  const sec = (remaining % 60).toString().padStart(2, '0');
  display.textContent = `${min}:${sec}`;
}

function startTimer(seconds) {
  clearInterval(timer);
  remaining = seconds;
  drawTimer();
  timer = setInterval(() => {
    remaining--;
    drawTimer();
    if (remaining <= 0) {
      clearInterval(timer);
      display.textContent = '¡Listo!';
      if ('vibrate' in navigator) navigator.vibrate([200, 100, 200]);
    }
  }, 1000);
}

document.querySelectorAll('[data-seconds]').forEach(btn => {
  btn.addEventListener('click', () => startTimer(Number(btn.dataset.seconds)));
});

document.getElementById('timerReset').addEventListener('click', () => {
  clearInterval(timer);
  remaining = 60;
  drawTimer();
});

const appTabs = document.querySelectorAll('.app-tab');
const appViews = document.querySelectorAll('.app-view');
appTabs.forEach(tab => tab.addEventListener('click', () => {
  appTabs.forEach(t => t.classList.remove('active'));
  appViews.forEach(v => v.classList.remove('active'));
  tab.classList.add('active');
  document.getElementById(tab.dataset.view).classList.add('active');
  localStorage.setItem('active24-main-view', tab.dataset.view);
  window.scrollTo({top:0,behavior:'smooth'});
}));
const savedView = localStorage.getItem('active24-main-view');
if(savedView){
  const tab=document.querySelector(`.app-tab[data-view="${savedView}"]`);
  const view=document.getElementById(savedView);
  if(tab&&view){appTabs.forEach(t=>t.classList.remove('active'));appViews.forEach(v=>v.classList.remove('active'));tab.classList.add('active');view.classList.add('active');}
}
document.querySelectorAll('.meal-toggle').forEach(btn=>btn.addEventListener('click',()=>{
  const content=btn.closest('.meal-card').querySelector('.meal-card__content');
  const collapsed=content.classList.toggle('collapsed');
  btn.textContent=collapsed?'+':'−';
  btn.setAttribute('aria-expanded',String(!collapsed));
}));
[...document.querySelectorAll('.food-item input')].forEach((box,i)=>{
  const key=`active24-food-${i}`;
  box.checked=localStorage.getItem(key)==='true';
  box.addEventListener('change',()=>localStorage.setItem(key,box.checked));
});
