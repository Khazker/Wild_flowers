'use strict'

const openForm = document.getElementById('open-form');
const closeForm = document.getElementById('close-form');
const popUp = document.getElementById('form-pop-up');

const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const navMenu = document.getElementById('nav');

openForm.addEventListener('click', function(e){
  e.preventDefault();
  popUp.classList.add('active');

})

closeForm.addEventListener('click', () => {
  popUp.classList.remove('active');
})

openMenu.addEventListener('click', function(e){
  e.preventDefault();
  navMenu.classList.add('active');

})

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('active');
})