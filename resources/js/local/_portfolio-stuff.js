const projects = document.querySelectorAll(".project-link")
const projectPreviews = document.querySelectorAll(".project-preview")
const closeButtons = document.querySelectorAll(".close-preview")
const previewOverlays = document.querySelectorAll(".preview-overlay")
const portfolioWindowCloseButtons = document.querySelector("#portfolioWindow .window-close")

projects.forEach(project => {
  project.addEventListener("click", function (e) {
    e.preventDefault()
    index = project.getAttribute("data-index")

    projectPreviews.forEach(preview => {
      if (preview.getAttribute("data-index") === index) {
        preview.classList.remove("closed")
      } else {
        preview.classList.add("closed")
      }
    })
  })
})


closeButtons.forEach(button => {
  button.addEventListener("click", function () {
    const wrapper = button.closest(".project-preview");
    wrapper.classList.add("closed")
  })
})

portfolioWindowCloseButtons.addEventListener("click", function () {
  projectPreviews.forEach(preview => {
    preview.classList.add("closed")
  })
})

// previewOverlays.forEach(overlay => {
//   overlay.addEventListener("click", function () {
//     projectPreviews.forEach(preview => {
//       preview.classList.add("closed")
//     })
//   })
// })