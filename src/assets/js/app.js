window.__forceSmoothScrollPolyfill__ = true

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