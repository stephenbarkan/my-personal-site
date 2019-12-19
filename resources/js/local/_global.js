const onResize = function () {
  $body.style.setProperty("--windowHeight", window.innerHeight + "px");
};

const overlayFadeOut = function () {
  const overlay = document.querySelector('.fade-overlay')
  overlay.classList.add('removed')
}

window.addEventListener("resize", function () {
  onResize();
});

overlayFadeOut();
onResize();