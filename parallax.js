/**
   * --------------------------------------------------------------------------
    Parallax
   * --------------------------------------------------------------------------
 */

window.addEventListener('scroll', function () {
  const parallax = document.querySelector('.parallaxV')
  const logo = document.querySelector('.logo')
  const text = document.querySelector('.section__container')
  let scrollPosition = window.pageYOffset

  parallax.style.transform = 'translateY(' + scrollPosition * 0.9 + 'px'
  logo.style.transform = 'translateY(' + scrollPosition * -0.3 + 'px'
  text.style.transform = 'translateY(' + scrollPosition * -0.1 + 'px'
})
