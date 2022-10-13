const ul = document.querySelector('.ul-on');


const ulButton = document.querySelector('.fa-bars');

const nava = document.querySelectorAll('.as');




ulButton.addEventListener('click', () => {
    ul.classList.toggle('ul-off')
    ulButton.classList.toggle('fa-xmark')
})


nava.forEach((link) => {
        link.addEventListener('click', (event) => {
            ul.classList.toggle('ul-off')
            ulButton.classList.toggle('fa-xmark')
            console.log(event.target)
        })
    })

    
const faArrowUp = document.querySelector('.fa-arrow-up');


faArrowUp.addEventListener('click', () => {
    window.scrollTo(0 , 0)
})