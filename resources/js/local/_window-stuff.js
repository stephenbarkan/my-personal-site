let closedWindows = document.querySelectorAll(".closed");
const closeAllButton = $closeAll.querySelector("button");
const windowWrappers = document.querySelectorAll(".window-wrapper");
const projectPreviews = document.querySelectorAll(".project-preview");
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
    const elWindow = selector;
    elWindow.classList.remove("closed");

    windowWrappers.forEach(function (wrapper) {
      wrapper.classList.add("disabled");
    });
    elWindow.classList.remove("disabled");
    windowZ = windowZ + 1;
    elWindow.style.zIndex = windowZ;
    $closeAll.focus();
    $closeAll.blur();
    checkClosedList();
  };

  const linkMe = document.getElementById("me");
  linkMe.addEventListener("click", function (e) {
    windowOpen(e, $meWindow);
  });

  const linkMusic = document.getElementById("music");
  linkMusic.addEventListener("click", function (e) {
    windowOpen(e, $musicWindow);
  });

  const linkJournal = document.getElementById("journal");
  linkJournal.addEventListener("click", function (e) {
    windowOpen(e, $journalWindow);
    if ($activeJournalEntry) {
      $updateURL(`?journal=${$activeJournalEntry}`);
    }
  });

  if ($query) {
    $openJournal($query);
    linkJournal.click();
  }

  const linkPortfolio = document.getElementById("portfolio");
  linkPortfolio.addEventListener("click", function (e) {
    windowOpen(e, $portfolioWindow);
  });

  const linkContact = document.getElementById("contact");
  linkContact.addEventListener("click", function (e) {
    windowOpen(e, $contactWindow);
  });

  windowWrappers.forEach(function (wrapper) {
    wrapper.addEventListener("mousedown", function () {
      bringToFront(wrapper);
    });
  });
};

const checkClosedList = function () {
  closedWindows = document.querySelectorAll(".window-wrapper.closed");

  if (closedWindows.length < windowWrappers.length - 1) {
    $closeAll.classList.add("visible");
  } else {
    $closeAll.classList.remove("visible");
  }

  if (closedWindows.length < windowWrappers.length) {
    $body.classList.add("window-open");
    onResize();
  } else {
    $body.classList.remove("window-open");
    onResize();
  }
};

$closeAll.addEventListener("click", function () {
  windowWrappers.forEach(function (wrapper) {
    wrapper.classList.add("closed");
  });
  projectPreviews.forEach(function (preview) {
    preview.classList.add("closed");
  });
  checkClosedList();
  $updateURL("/");
});

windowFunctions();
