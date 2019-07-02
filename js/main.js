'use strict';

const menuButton = document.querySelector('.nav-trigger');
const closeButton = document.querySelector('.nav-close');
const navigationMenu = document.querySelector('.nav');
const pageWrapperElement = document.querySelectorAll('.page__wrapper');


menuButton.innerHTML = '';
closeButton.innerHTML = '';
navigationMenu.classList.add('hidden');
pageWrapperElement[1].classList.add('page__wrapper--footer');

function accessMenu() {
    navigationMenu.classList.toggle('hidden');
    menuButton.classList.toggle('hidden');
}

menuButton.addEventListener('click', accessMenu);
closeButton.addEventListener('click', accessMenu);