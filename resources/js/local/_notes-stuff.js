const aboutSidebarLinks = document.querySelectorAll('.about-note-link')
const aboutNotes = document.querySelectorAll('.about-note')

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
  })
})

displayNote(aboutSidebarLinks[0])