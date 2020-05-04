const journalSidebarLinks = document.querySelectorAll('.journal-link')
const journalEntry = document.querySelector('.journal')
const noteScroller = document.querySelector('.note-area')
const journalContent = document.getElementById('journal-content')
const journalSidebarOpenButton = document.getElementById('journal-open')
const journalSidebarCloseButton = document.getElementById('journal-close')
const journalSidebar = document.getElementById('journal-sidebar')
const journalWindowCloseButton = $journalWindow.querySelector('.window-close')

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

journalSidebarLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    journalSidebarLinks.forEach(link => {
      link.classList.remove("active")
    })
    displayNote(link)
    journalSidebar.classList.remove('open')
    journalSidebarCloseButton.classList.remove('open')
  })
})

journalSidebarOpenButton.addEventListener('click', function () {
  if (journalSidebar.classList.contains('open')) {
    journalSidebar.classList.remove('open')
    journalSidebarCloseButton.classList.remove('open')
  } else {
    journalSidebar.classList.add('open')
    journalSidebarCloseButton.classList.add('open')
  }
})

journalSidebarCloseButton.addEventListener('click', function () {
  if (journalSidebar.classList.contains('open')) {
    journalSidebar.classList.remove('open')
    journalSidebarCloseButton.classList.remove('open')
  } else {
    journalSidebar.classList.add('open')
    journalSidebarCloseButton.classList.add('open')
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

  journalSidebarLinks.forEach(link => {
    if (hrefToQuery(link) === $query) {
      displayNote(link)
    }
  })
}