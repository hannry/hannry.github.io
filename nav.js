const toggleBtn = document.querySelector('#navBtn')
const menu = document.querySelector('.navbar');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  menu.classList.toggle('active');
});