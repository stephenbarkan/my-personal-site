const aboutSidebarLinks = document.querySelectorAll('.about-note-link')
const aboutNote = document.querySelector('.about-note')
const journalContent = document.getElementById('journal-content')
const aboutSidebarOpenButton = document.getElementById('about-note-open')
const aboutSidebarCloseButton = document.getElementById('about-note-close')
const aboutSidebar = document.getElementById('about-note-sidebar')

const displayNote = function (link) {
  const currentItem = link.getAttribute('data-note')

  fetch(currentItem)
    .then(response => response.text())
    .then(text => {
      aboutNote.innerHTML = text
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