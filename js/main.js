'use strict';

const menuButton = document.querySelector('.nav-trigger');
const closeButton = document.querySelector('.nav-close');
const navigationMenu = document.querySelector('.nav__items');
const pageWrapperElement = document.querySelectorAll('.page__wrapper');

pageWrapperElement[1].classList.add('page__wrapper--footer');

function accessMenu() {
    navigationMenu.classList.toggle('active');
    menuButton.classList.toggle('hidden');
}

menuButton.addEventListener('click', accessMenu);
closeButton.addEventListener('click', accessMenu);