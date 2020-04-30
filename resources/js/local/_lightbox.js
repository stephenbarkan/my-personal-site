const flipping = new Flipping({
  duration: 600
});
const lightboxTemplate = document.getElementById("lightbox-template").content.cloneNode(true)

const $imageCheck = function () {
  $articleImages.forEach(img => {
    img.addEventListener("click", function () {
      $main.appendChild(lightboxTemplate.cloneNode(true))

      const lightboxContainer = document.getElementById("lightbox-container");
      const lightbox = document.getElementById("lightbox")
      const lightboxOverlay = document.getElementById("lightbox-overlay")
      img.dataset.flipKey = "lightbox"

      src = img.getAttribute('src')
      console.log(src)

      lightbox.setAttribute('src', src)

      if (lightbox.complete) {
        setTimeout(function () {
          lightboxContainer.classList.remove("opacity-0")
        }, 100)
      }



      lightboxContainer.addEventListener("click", function () {

        lightboxContainer.classList.add('opacity-0')
        lightboxContainer.addEventListener('transitionend', () => {
          lightboxContainer.remove()
        })

      })
    })
  })
}