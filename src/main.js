const buttons = document.querySelectorAll('.menu__btn');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const menu = document.getElementById('menu');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    openBtn.classList.toggle('showBtn');
    closeBtn.classList.toggle('showBtn');
    menu.classList.toggle('showMenu');
  });
});
