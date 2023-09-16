const up = document.querySelector('.up-button')
const down = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlides = document.querySelector('.main-slide')
const divCount = mainSlides.querySelectorAll('div').length
const container = document.querySelector('.container')
let activeSlideIndex = 0

sidebar.style.top = `-${(divCount - 1) * 100}vh`

up.addEventListener('click', () => {
changeSlide('up')
})

down.addEventListener('click', () => {
    changeSlide('down')
})


function changeSlide(direction) {
if(direction === 'up'){
    activeSlideIndex++
    if(activeSlideIndex === divCount){
        activeSlideIndex = 0
    }
} else if(direction === 'down'){
    activeSlideIndex--
    if (activeSlideIndex < 0) {
        activeSlideIndex = divCount - 1
    }
}

const height = container.clientHeight

mainSlides.style.transform = `translateY(-${activeSlideIndex * height}px)`
sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`

}

