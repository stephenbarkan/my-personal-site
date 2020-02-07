const aboutSidebarLinks = document.querySelectorAll('.about-note-link')
const aboutNotes = document.querySelectorAll('.about-note')
const aboutSidebarOpenButton = document.getElementById('about-note-open')
const aboutSidebarCloseButton = document.getElementById('about-note-close')
const aboutSidebar = document.getElementById('about-note-sidebar')

const displayNote = function (link) {
  const currentItem = link.getAttribute('data-note')
  aboutNotes.forEach(item => {
    if (item.getAttribute('data-note') == currentItem) {
      item.classList.add('visible')
    } else {
      item.classList.remove('visible')
    }
  })
}

aboutSidebarLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    displayNote(link)
    aboutSidebar.classList.remove('open')
    aboutSidebarCloseButton.classList.remove('open')
  })
})

displayNote(aboutSidebarLinks[0])


aboutSidebarOpenButton.addEventListener('click', function () {
  if (aboutSidebar.classList.contains('open')) {
    aboutSidebar.classList.remove('open')
    aboutSidebarCloseButton.classList.remove('open')
  } else {
    aboutSidebar.classList.add('open')
    aboutSidebarCloseButton.classList.add('open')
  }
})

aboutSidebarCloseButton.addEventListener('click', function () {
  if (aboutSidebar.classList.contains('open')) {
    aboutSidebar.classList.remove('open')
    aboutSidebarCloseButton.classList.remove('open')
  } else {
    aboutSidebar.classList.add('open')
    aboutSidebarCloseButton.classList.add('open')
  }
})