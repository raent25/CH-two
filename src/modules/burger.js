class Burger {
    constructor(button, overley) {
        document.querySelector(button).onclick = function() {
            document.querySelector('.burger-menu__line').classList.toggle('burger-menu-active')
            document.querySelector('.burger-menu__nav').classList.toggle('burger-menu-active')
            document.querySelector('.burger-menu__overley').classList.toggle('burger-menu-active')
            document.querySelector('.burger-menu__button').classList.toggle('burger-menu-active')
            document.querySelector('body').classList.toggle('burger-menu-active')
        }
        document.querySelector(overley).onclick = function() {
            document.querySelector('.burger-menu__line').classList.toggle('burger-menu-active')
            document.querySelector('.burger-menu__nav').classList.toggle('burger-menu-active')
            document.querySelector('.burger-menu__overley').classList.toggle('burger-menu-active')
            document.querySelector('body').classList.toggle('burger-menu-active')
            document.querySelector('.burger-menu__button').classList.toggle('burger-menu-active')
        }
    }
}
const burger = new Burger('#button', '#overley')