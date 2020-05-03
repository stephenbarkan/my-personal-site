const aboutSidebarLinks = document.querySelectorAll('.about-note-link')
const journalEntry = document.querySelector('.about-note')
const noteScroller = document.querySelector('.note-area')
const journalContent = document.getElementById('journal-content')
const aboutSidebarOpenButton = document.getElementById('about-note-open')
const aboutSidebarCloseButton = document.getElementById('about-note-close')
const aboutSidebar = document.getElementById('about-note-sidebar')
const journalWindowWrapper = journalEntry.closest(".window-wrapper");
const journalWindowCloseButton = journalWindowWrapper.querySelector('.window-close')
let $activeJournalEntry

let $articleImages = null

const displayNote = function (link) {

  link.classList.add("active")
  const query = hrefToQuery(link)
  $activeJournalEntry = query
  fetch(`journal/${query}/index.html`)
    .then(response => response.text())
    .then(text => {
      journalEntry.innerHTML = text
      noteScroller.scrollTop = 0
      $articleImages = journalEntry.querySelectorAll('img')
      $imageCheck()
    })
  $updateURL(`?journal=${query}`);
}

const hrefToQuery = function (link) {
  const href = link.getAttribute('href')
  query = href.split('=')
  currentItem = query[1]

  return currentItem
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


journalWindowCloseButton.addEventListener('click', function () {
  $updateURL('/')
})

//open journal based on the url

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
}

let $query = getQueryVariable('journal')
const $openJournal = function ($query) {

  aboutSidebarLinks.forEach(link => {
    if (hrefToQuery(link) === $query) {
      displayNote(link)
    }
  })
}