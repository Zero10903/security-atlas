const buttons = document.querySelectorAll('.menu__btn');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const menu = document.getElementById('menu');

const FAQ_btn_1 = document.querySelector('#FAQ__btn--n1');
const FAQ_btn_2 = document.querySelector('#FAQ__btn--n2');
const FAQ_btn_3 = document.querySelector('#FAQ__btn--n3');
const FAQ_ans_1 = document.querySelector('#FAQ__answer--n1');
const FAQ_ans_2 = document.querySelector('#FAQ__answer--n2');
const FAQ_ans_3 = document.querySelector('#FAQ__answer--n3');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    openBtn.classList.toggle('showBtn');
    closeBtn.classList.toggle('showBtn');
    menu.classList.toggle('showMenu');
  });
});

FAQ_btn_1.addEventListener('click', () => {
  FAQ_ans_1.classList.toggle('FAQ__answer--show');
});
FAQ_btn_2.addEventListener('click', () => {
  FAQ_ans_2.classList.toggle('FAQ__answer--show');
});
FAQ_btn_3.addEventListener('click', () => {
  FAQ_ans_3.classList.toggle('FAQ__answer--show');
});
