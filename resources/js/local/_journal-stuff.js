const aboutSidebarLinks = document.querySelectorAll('.about-note-link')
const aboutNote = document.querySelector('.about-note')
const noteScroller = document.querySelector('.note-area')
const journalContent = document.getElementById('journal-content')
const aboutSidebarOpenButton = document.getElementById('about-note-open')
const aboutSidebarCloseButton = document.getElementById('about-note-close')
const aboutSidebar = document.getElementById('about-note-sidebar')

const displayNote = function (link) {
  const currentItem = link.getAttribute('data-note')
  link.classList.add("active")
  fetch(currentItem)
    .then(response => response.text())
    .then(text => {
      aboutNote.innerHTML = text
      noteScroller.scrollTop = 0
    })
}

aboutSidebarLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    aboutSidebarLinks.forEach(link => {
      link.classList.remove("active")
    })
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