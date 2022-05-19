window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '80px',
  delay: 120,
  duration: 700,
  reset: true,
  useDelay: 'once'
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .cards h2,
#services .cards .card,
#about,
#about header,
#about .content,
#contact,
#contact .col-a header,
#contact .col-a .content ul,
#contact .col-a .content .button,
#contact .col-b
`)

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  //verificar se o topo passou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  //verificar se a base esta abaixo da linha alvo
  const sectionEndsAt = sectionTop + sectionHeight
  // Final da seção passou da linha alvo ?
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  //limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}
