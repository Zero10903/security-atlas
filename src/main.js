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

const card1 = document.getElementById('card--c1');
const card2 = document.getElementById('card--c2');
const card3 = document.getElementById('card--c3');
const card4 = document.getElementById('card--c4');
const FAQ1 = document.getElementById('FAQ--n1');
const FAQ2 = document.getElementById('FAQ--n2');
const FAQ3 = document.getElementById('FAQ--n3');

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

const cargarObjetos = (entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('visible');
    } else {
      entrada.target.classList.remove('visible');
    }
  });
};

const observador = new IntersectionObserver(cargarObjetos, {
  root: null,
  rootMargin: '500px 0px 100px 0px',
  threshold: 0.5,
});

observador.observe(card1);
observador.observe(card2);
observador.observe(card3);
observador.observe(card4);
observador.observe(FAQ1);
observador.observe(FAQ2);
observador.observe(FAQ3);
