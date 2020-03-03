const draggableTarget = ".draggable";
const draggableItems = document.querySelectorAll(draggableTarget);
const draggableWindowCheck = function () {
  if (window.innerWidth >= 640) {
    interact(draggableTarget).draggable(true);
  } else {
    interact(draggableTarget).draggable(false);
    draggableItems.forEach(function (item) {
      item.style.transform = `none`;
      item.setAttribute("data-x", 0);
      item.setAttribute("data-y", 0);
    });
  }
};

interact(draggableTarget).draggable({
  enabled: false,
  inertia: false,
  autoScroll: true,
  allowFrom: ".draggable-handle",
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: "body",
      endOnly: false
    })
  ],
  onmove: dragMoveListener
});

function dragMoveListener(event) {
  var target = event.target;
  // keep the dragged position in the data-x/data-y attributes
  var x = Math.floor((parseFloat(target.getAttribute("data-x")) || 0) + event.dx);
  var y = Math.floor((parseFloat(target.getAttribute("data-y")) || 0) + event.dy);

  // translate the element
  target.style.webkitTransform = target.style.transform =
    "translate(" + x + "px, " + y + "px)";

  // update the posiion attributes
  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

window.addEventListener("resize", function () {
  draggableWindowCheck();
});

draggableWindowCheck();