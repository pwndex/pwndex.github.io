window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader')
  const bodyTag = document.querySelector('body')

  bodyTag.classList.add('body-fixed')

  const fadeEffect = setInterval(() => {
    if (!preloader.style.opacity) {
      preloader.style.opacity = 1
    }
    if (preloader.style.opacity > 0) {
      preloader.style.opacity -= 0.1
    } else {
      clearInterval(fadeEffect)
    }

    preloader.classList.remove('preloader')
    bodyTag.classList.remove('body-fixed')
    preloader.classList.add('preloader-hide')
    
  }, 200)
})

window.__forceSmoothScrollPolyfill__ = true
import smoothscroll from 'smoothscroll-polyfill'
import 'particles.js/particles'
import '@fortawesome/fontawesome-free/js/all'

smoothscroll.polyfill()
particlesJS.load('particles-js', 'assets/js/particles.json')

// Fixed Navigation On Scroll
window.onscroll = () => {
  const headerMenu = document.querySelector('.header__nav')

  if (window.pageYOffset > 10) {
    headerMenu.classList.add('header__fixed')
  } else {
    headerMenu.classList.remove('header__fixed')
  }
}

// Navigation Toggle Button Animation
let navToggleButton = document.querySelector('#nav-toggle-button')
let navToggleContainer = document.querySelector('#nav-mobile-container')
let mobileLinks = document.querySelectorAll('a[data-link*="mobile"]')
let desktopLinks = document.querySelectorAll('a[data-link*="desktop"]')
let bodyTag = document.querySelector('body');

navToggleButton.addEventListener('click', () => {

  bodyTag.classList.toggle('body-fixed')
  navToggleButton.classList.toggle('button-active')
  navToggleContainer.classList.toggle('container-disabled')

  for (let link of mobileLinks) {
      
    link.addEventListener('click', (e) => {
      e.preventDefault()
      
      const linkID = link.getAttribute('href')

      bodyTag.classList.remove('body-fixed')
      navToggleButton.classList.remove('button-active')
      navToggleContainer.classList.add('container-disabled')

      document.querySelector('' + linkID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    })
  }
})

for (let link of desktopLinks) {
      
  link.addEventListener('click', (e) => {
    e.preventDefault()
    
    const linkID = link.getAttribute('href')

    document.querySelector('' + linkID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })

}