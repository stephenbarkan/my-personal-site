// Config

// Selectors
// store selectors for reference so we only call them once
const $body = document.querySelector('body')
const $main = document.getElementById('main')

const $meWindow = document.getElementById("meWindow")
const $musicWindow = document.getElementById("musicWindow")
const $journalWindow = document.getElementById("journalWindow")
const $portfolioWindow = document.getElementById("portfolioWindow")
const $contactWindow = document.getElementById("contactWindow")

const $closeAll = document.querySelector(".close-all");


const $updateURL = function (string) {
  let stateObj
  history.replaceState(stateObj, '', string);
}