let closedWindows = document.querySelectorAll(".closed");
const closeAllButton = document.querySelector(".close-all");
const windowWrappers = document.querySelectorAll(".window-wrapper");
const closeButtons = document.querySelectorAll(".window-close");
let windowZ = 50;

const windowFunctions = function () {
  closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const wrapper = button.closest(".window-wrapper");
      wrapper.classList.add("closed");
      checkClosedList();
    });
  });

  const bringToFront = function (wrapper) {
    windowZ = windowZ + 1;
    wrapper.style.zIndex = windowZ;

    windowWrappers.forEach(function (wrapper) {
      wrapper.classList.add("disabled");
    });
    wrapper.classList.remove("disabled");
  };

  const windowOpen = function (e, selector) {
    e.preventDefault();
    const elWindow = document.getElementById(selector);
    elWindow.classList.remove("closed");
    windowWrappers.forEach(function (wrapper) {
      wrapper.classList.add("disabled");
    });
    elWindow.classList.remove("disabled");
    windowZ = windowZ + 1;
    elWindow.style.zIndex = windowZ;
    closeButton = elWindow.querySelector('.window-close')
    closeButton.focus()
    closeButton.blur()
    checkClosedList();
  };

  const linkMe = document.getElementById("me");
  linkMe.addEventListener("click", function (e) {
    windowOpen(e, "meWindow");
  });

  const linkMusic = document.getElementById("music");
  linkMusic.addEventListener("click", function (e) {
    windowOpen(e, "musicWindow");
  });

  const linkAbout = document.getElementById("about");
  linkAbout.addEventListener("click", function (e) {
    windowOpen(e, "aboutWindow");
  });

  const linkPortfolio = document.getElementById("portfolio");
  linkPortfolio.addEventListener("click", function (e) {
    windowOpen(e, "portfolioWindow");
  });

  const linkContact = document.getElementById("contact");
  linkContact.addEventListener("click", function (e) {
    windowOpen(e, "contactWindow");
  });

  windowWrappers.forEach(function (wrapper) {
    wrapper.addEventListener("mousedown", function () {
      bringToFront(wrapper);
    });
  });
};

const checkClosedList = function () {
  closedWindows = document.querySelectorAll(".closed");

  if (closedWindows.length < windowWrappers.length - 1) {
    closeAllButton.classList.add("visible");
  } else {
    closeAllButton.classList.remove("visible");
  }

  if (closedWindows.length < windowWrappers.length) {
    $body.classList.add("window-open");
    onResize();
  } else {
    $body.classList.remove("window-open");
    onResize();
  }
};

closeAllButton.addEventListener("click", function () {
  windowWrappers.forEach(function (wrapper) {
    wrapper.classList.add("closed");
  });
  checkClosedList();
});

windowFunctions();