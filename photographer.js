//Slider


const slider = document.querySelector('.slider');
const images = ['url(images/headerPhoto-1.jpg)', 'url(images/headerPhoto-2.jpg)', 'url(images/headerPhoto-3.jpg)'];
let activeNumber = 0;
const time = 4000;
const dots = [...document.querySelectorAll('.slider__dot')];

const changeDot = () => {
    const activeDot = dots.findIndex((dot) => dot.classList.contains('slider__dot--active'))
    dots[activeDot].classList.remove('slider__dot--active')
    dots[activeNumber].classList.add('slider__dot--active')
}
const changeImage = () => {
    activeNumber++
    if (activeNumber === images.length) {
        activeNumber = 0;
    }
    slider.style.backgroundImage = images[activeNumber];
    changeDot()
}
let intervalIndex = setInterval(changeImage, time)

const arrowRight = document.querySelector('.slider__arrow--right')
const arrowLeft = document.querySelector('.slider__arrow--left')


const rightMove = () => {
    clearInterval(intervalIndex)
    activeNumber++
    if (activeNumber === images.length) {
        activeNumber = 0;
    }
    slider.style.backgroundImage = images[activeNumber];
    changeDot();
    intervalIndex = setInterval(changeImage, time);
}
const leftMove = () => {
    clearInterval(intervalIndex)
    activeNumber--
    if (activeNumber < 0) {
        activeNumber = images.length - 1;
    }
    slider.style.backgroundImage = images[activeNumber];
    changeDot()
    intervalIndex = setInterval(changeImage, time);
}

arrowLeft.addEventListener('click', leftMove)
arrowRight.addEventListener('click', rightMove)

//Hamburger menu
const hamburgerIcon = document.querySelector('.menu__hamburger')
const listMenu = document.querySelector('.menu__list')
const menuBar = document.querySelector('.menu__bar')

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('menu__hamburger--active')
    listMenu.classList.toggle('menu__list--active')
})
//Appear animation
const sliderHeight = document.querySelector('.slider').offsetHeight
const menuHeight = document.querySelector('.menu').offsetHeight
const aboutHeight = document.querySelector('.about').offsetHeight
const aboutTitle = document.querySelector('.about__title')
const aboutPhoto = document.querySelector('.about__photo')
const aboutInfo = document.querySelector('.about__info')
const windowSize = window.innerHeight
const setHeight = 0;

window.addEventListener('scroll', () => {
    const scrollSize = window.scrollY
    const titlePosition = aboutTitle.offsetTop
    const photoPosition = aboutPhoto.offsetTop
    const aboutPosition = aboutInfo.offsetTop
    if (scrollSize + windowSize > titlePosition) {
        aboutTitle.style.opacity = '1'
    }
    if (scrollSize + windowSize > photoPosition) {
        aboutPhoto.style.opacity = '1'
    }
    if (scrollSize + windowSize > aboutPosition) {
        aboutInfo.style.opacity = '1'
    }
})
const gallerySets = document.getElementsByClassName('gallery__set');
window.addEventListener('scroll', () => {
    const scrollSize = window.scrollY
    for (i = 0; i < gallerySets.length; i++) {
        const setPosition = gallerySets[i].offsetTop
        if (scrollSize + windowSize > setPosition) {
            gallerySets[i].style.opacity = '1'
            gallerySets[i].style.transform = 'translateX(0)'
        }
    }

})