// const projects = document.querySelectorAll(".project-link")
// const closeButton = document.querySelector(".close-preview")
// const preview = document.querySelector(".project-preview")
// const previewOverlay = document.querySelector(".preview-overlay")
// const portfolioWindowCloseButtons = document.querySelector("#portfolioWindow .window-close")
// const previewPopup = document.getElementById("preview-popup")

// projects.forEach(project => {
//   project.addEventListener("click", function (e) {
//     e.preventDefault()
//     const currentItem = project.getAttribute('data-project')

//     fetch(currentItem)
//       .then(response => response.text())
//       .then(text => {
//         previewPopup.innerHTML = text
//         preview.classList.remove("closed")
//       })
//   })
// })


// closeButton.addEventListener("click", function () {
//   preview.classList.add("closed")
// })

// previewOverlay.addEventListener("click", function () {
//   preview.classList.add("closed")
// })