const allBtns = document.querySelectorAll(".wiggle-hover, .markdown a");

let mouseX;
let mouseY;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  $body.style.setProperty("--pointer-x", mouseX);
  $body.style.setProperty("--pointer-y", mouseY);
});

allBtns.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    let rect = btn.getBoundingClientRect();

    btn.style.setProperty("--x", rect.left);
    btn.style.setProperty("--y", rect.top);
    btn.style.setProperty("--w", rect.width);
    btn.style.setProperty("--h", rect.height);
  });
});
