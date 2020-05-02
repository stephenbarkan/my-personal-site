// Config
// Selectors
// store selectors for reference so we only call them once
var $body = document.querySelector('body');
var $header = document.getElementById('#header');
var $main = document.getElementById('main');
var $footer = document.getElementById('#footer');
var contactLink = document.getElementById("contact");
var chatWindow = document.getElementById("chat-window");
var messagesList = document.getElementById("chat-messages");
var chatControls = document.getElementById("chat-controls");
var nextButton = document.getElementById("nextButton");
var nextButtonWrapper = document.getElementById("next-button-wrapper");
var inputFields = document.querySelectorAll("#chat-controls textarea");
var form = document.getElementById('contact-form');
var editButtons = [];
var formSubmit = null;
var formClear = null;
var state = 0;
var states = ["yourName", "yourMessage", "yourEmail", "confirm"];
var userName = "";
var typingBubble = document.createElement("div");
typingBubble.classList.add("typingDots", "fromThem");
typingBubble.innerHTML = "<div class=\"message typing\"><p><span>\u2022</span><span>\u2022</span><span>\u2022</span></p></div>";
var confirmModalTemplate = document.getElementById("confirmModal");
var confirmModal = confirmModalTemplate.content.cloneNode(true);
var responses = ["Okay, ".concat(userName, "! What do you want to say to me?"), "Okay, that's pretty cool. Will you give me your email so I can reply to you?", ""];
chatWindow.setAttribute("data-state", states[0]);

function chatPush(origin, message) {
  var originClass;

  if (origin == "user") {
    originClass = "fromMe";
  } else {
    originClass = "fromThem";
  }

  var newBubble = document.createElement("div");
  newBubble.classList.add(originClass);

  if (originClass == "fromMe") {
    newBubble.innerHTML = "<div class='message'><div><button class='message-edit'>Edit</button></div><p data-field=\"".concat(states[state], "\"") + ">" + message + "</p></div>";
  } else {
    newBubble.innerHTML = "<div class='message'><p>" + message + "</div>";
  }

  messagesList.appendChild(newBubble);
  showLatestMessage();
}

function updateEditButtons() {
  editButtons = document.querySelectorAll('.message-edit');
  editButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      var el = e.target;
      var message = el.closest(".message");
      var editable = message.querySelector("p");
      editMessage(el, message, editable);
    });
  });
}

var editMessage = function editMessage(el, message, editable) {
  var isEditable = editable.getAttribute("contenteditable");
  var newContent;

  if (editable.innerText !== "") {
    editable.toggleAttribute("contenteditable");

    if (isEditable === null) {
      message.setAttribute("tabindex", "0");
      message.classList.add("editable");
      el.innerText = "Save";
    } else {
      newContent = editable.innerText;
      message.removeAttribute("tabindex");
      message.classList.remove("editable");
      el.innerText = "Edit";
      inputFields.forEach(function (field) {
        if (field.id == editable.getAttribute("data-field")) {
          field.innerHTML = newContent;
        }
      });
    }
  }
};

inputFields.forEach(function (inputField) {
  inputField.addEventListener("keydown", function (e) {
    if (e.which == 13) {
      e.preventDefault();

      if (inputField.value) {
        event.stopPropagation();
        nextButton.click();
        nextButton.classList.add("animating");
      }
    }
  });
  inputField.addEventListener("keyup", function () {
    inputValueCheck();
  });
});

function inputValueCheck() {
  if (inputFields[state].value) {
    nextButtonWrapper.classList.remove('disabled');
    nextButton.setAttribute("tabindex", "0");
  } else {
    nextButtonWrapper.classList.add('disabled');
    nextButton.setAttribute("tabindex", "-1");
  }
}

nextButton.addEventListener("click", function (e) {
  e.preventDefault();
  nextButton.classList.add('animating');
  nextButton.addEventListener('animationend', function () {
    nextButton.classList.remove('animating');
    nextButton.blur();
  });
  message = document.querySelector("#".concat(states[state])).value;

  if (message) {
    chatPush("user", message);
    updateEditButtons();
    saveName();
    updateState();

    if (state < states.length - 1) {
      addTypingBubble();
      setTimeout(function () {
        removeTypingBubble();
        chatPush("you", responses[state % 4 - 1]);
      }, 2500);
    } else {
      addTypingBubble();
      setTimeout(function () {
        removeTypingBubble();
        addConfirmBox();
      }, 2500);
    }
  }
});

function showLatestMessage() {
  messagesList.lastChild.scrollIntoView({
    behavior: 'smooth',
    block: 'end'
  });
}

var addTypingBubble = function addTypingBubble() {
  chatControls.classList.add("pointer-events-none");
  setTimeout(function () {
    messagesList.appendChild(typingBubble);
    showLatestMessage();
  }, 500);
};

var removeTypingBubble = function removeTypingBubble() {
  chatControls.classList.remove("pointer-events-none");
  messagesList.removeChild(typingBubble);
  inputFields[state].focus();
};

var addConfirmBox = function addConfirmBox() {
  messagesList.appendChild(confirmModal.cloneNode(true));
  showLatestMessage();
  formSubmit = document.querySelector("#formSubmit");
  confirmBox = document.querySelector("#confirmBox");
  formClear = document.querySelector("#formClear");
  formSubmit.addEventListener("click", function (e) {
    formSubmit.setAttribute('disabled', 'true');
    e.preventDefault();
    var formData = new FormData(form);
    fetch(form.getAttribute('action'), {
      method: 'POST',
      headers: {
        'Accept': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'enctype': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams(formData).toString()
    }).then(function (res) {
      if (res) {
        formSubmit.blur();
        confirmBox.classList.add("opacity-50", "pointer-events-none");
        addTypingBubble();
        setTimeout(function () {
          removeTypingBubble();
          chatPush("you", "Awesome, thanks, ".concat(userName, "! I'll get back to you soon."));
        }, 2500);
      }
    });
  });
};

function saveName() {
  inputFields.forEach(function (field) {
    if (field.name === "yourName") {
      var str = field.value;
      var words = str.split(" ");
      userName = words[0];
      responses[0] = "Oh hey, ".concat(userName, "! What's up?");
    }
  });
}

function updateState() {
  state = (state + 1) % 4;
  currentState = states[state % 4];
  chatWindow.setAttribute("data-state", currentState);
  inputValueCheck();
}

contactLink.addEventListener("click", function () {
  addTypingBubble();
  setTimeout(function () {
    removeTypingBubble();
    chatPush("you", "Hello, Stephen here! 👋 Who are you?");
  }, 2500);
}, {
  once: true
});
var draggableTarget = ".draggable";
var draggableItems = document.querySelectorAll(draggableTarget);

var draggableWindowCheck = function draggableWindowCheck() {
  if (window.innerWidth >= 640) {
    interact(draggableTarget).draggable(true);
  } else {
    interact(draggableTarget).draggable(false);
    draggableItems.forEach(function (item) {
      item.style.transform = "none";
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
  modifiers: [interact.modifiers.restrictRect({
    restriction: "body",
    endOnly: false
  })],
  onmove: dragMoveListener
});

function dragMoveListener(event) {
  var target = event.target; // keep the dragged position in the data-x/data-y attributes

  var x = Math.floor((parseFloat(target.getAttribute("data-x")) || 0) + event.dx);
  var y = Math.floor((parseFloat(target.getAttribute("data-y")) || 0) + event.dy); // translate the element

  target.style.webkitTransform = target.style.transform = "translate(" + x + "px, " + y + "px)"; // update the posiion attributes

  target.setAttribute("data-x", x);
  target.setAttribute("data-y", y);
}

window.addEventListener("resize", function () {
  draggableWindowCheck();
});
draggableWindowCheck();
var onResize = function onResize() {
  $body.style.setProperty("--windowHeight", window.innerHeight + "px");
};

var overlayFadeOut = function overlayFadeOut() {
  var overlay = document.querySelector('.fade-overlay');
  overlay.classList.add('removed');
};

window.addEventListener("resize", function () {
  onResize();
});
overlayFadeOut();
onResize();
//change heart to/from red and change accompanying text
var igHeart = document.querySelector('.ig-heart-btn');
var igHeartSvg = igHeart.querySelector('svg');
var igHeartText = document.querySelector('.ig-heart-text');
var igCaptions = document.querySelectorAll('.ig-caption-container');

var instagramHeart = function instagramHeart() {
  if (igHeart.classList.contains('liked')) {
    igHeart.classList.remove('liked');
    igHeartText.textContent = "0 Likes";
  } else {
    igHeart.classList.add('liked');
    igHeartText.textContent = "1 Like!";
  }

  igHeart.classList.add('animating');
  igHeart.addEventListener('animationend', function () {
    igHeart.classList.remove('animating');
  });
};

igHeart.addEventListener('click', function (e) {
  e.preventDefault();
  instagramHeart();
});
igCaptions.forEach(function (caption) {
  caption.addEventListener('click', function () {
    if (caption.classList.contains('reveal')) {
      caption.classList.remove('reveal');
    } else {
      caption.classList.add('reveal');
    }
  });
});
var current = 0;
var igImages = document.querySelectorAll('.ig-image');
var totalImages = igImages.length;
var igDots = document.querySelectorAll('.ig-dot');
var igCaptions = document.querySelectorAll('.ig-caption');
var igDates = document.querySelectorAll('.ig-date');
var igLeft = document.querySelector('.ig-left');
var igRight = document.querySelector('.ig-right');
var igSlider = document.querySelector('.ig-slider');
igImages.forEach(function (image, i) {
  image.style.transform = "translateX(".concat(100 * i, "%)");
});

var igUpdate = function igUpdate() {
  igDots.forEach(function (dot, i) {
    if (i === current) {
      dot.classList.add('current');
    } else {
      dot.classList.remove('current');
    }
  });
  igCaptions.forEach(function (caption, i) {
    if (i === current) {
      caption.classList.add('current');
    } else {
      caption.classList.remove('current');
    }
  });
  igDates.forEach(function (date, i) {
    if (i === current) {
      date.classList.add('current');
    } else {
      date.classList.remove('current');
    }
  });
};

var nextImage = function nextImage() {
  current = current + 1;
  igLeft.style.visibility = "visible";

  if (current >= totalImages - 1) {
    current = totalImages - 1;
    igRight.style.visibility = "hidden";
    igLeft.focus();
  }

  moveSlider();
  igUpdate();
};

var prevImage = function prevImage() {
  current = current - 1;
  igRight.style.visibility = "visible";

  if (current <= 0) {
    current = 0;
    igLeft.style.visibility = "hidden";
    igRight.focus();
  } else {}

  moveSlider();
  igUpdate();
};

var moveSlider = function moveSlider() {
  igSlider.style.transform = "translateX(".concat(current * -100, "%)");
};

igLeft.addEventListener('click', function (e) {
  e.preventDefault();
  prevImage();
});
igRight.addEventListener('click', function (e) {
  e.preventDefault();
  nextImage();
});
igLeft.style.visibility = "hidden";
igUpdate();
var aboutSidebarLinks = document.querySelectorAll('.about-note-link');
var aboutNote = document.querySelector('.about-note');
var noteScroller = document.querySelector('.note-area');
var journalContent = document.getElementById('journal-content');
var aboutSidebarOpenButton = document.getElementById('about-note-open');
var aboutSidebarCloseButton = document.getElementById('about-note-close');
var aboutSidebar = document.getElementById('about-note-sidebar');
var $articleImages = null;

var displayNote = function displayNote(link) {
  var currentItem = link.getAttribute('data-note');
  link.classList.add("active");
  fetch(currentItem).then(function (response) {
    return response.text();
  }).then(function (text) {
    aboutNote.innerHTML = text;
    noteScroller.scrollTop = 0;
    $articleImages = aboutNote.querySelectorAll('img');
    $imageCheck();
  });
};

aboutSidebarLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    aboutSidebarLinks.forEach(function (link) {
      link.classList.remove("active");
    });
    displayNote(link);
    aboutSidebar.classList.remove('open');
    aboutSidebarCloseButton.classList.remove('open');
  });
}); // displayNote(aboutSidebarLinks[0])

aboutSidebarOpenButton.addEventListener('click', function () {
  if (aboutSidebar.classList.contains('open')) {
    aboutSidebar.classList.remove('open');
    aboutSidebarCloseButton.classList.remove('open');
  } else {
    aboutSidebar.classList.add('open');
    aboutSidebarCloseButton.classList.add('open');
  }
});
aboutSidebarCloseButton.addEventListener('click', function () {
  if (aboutSidebar.classList.contains('open')) {
    aboutSidebar.classList.remove('open');
    aboutSidebarCloseButton.classList.remove('open');
  } else {
    aboutSidebar.classList.add('open');
    aboutSidebarCloseButton.classList.add('open');
  }
});
var flipping = new Flipping({
  duration: 600
});
var lightboxTemplate = document.getElementById("lightbox-template").content.cloneNode(true);

var $imageCheck = function $imageCheck() {
  $articleImages.forEach(function (img) {
    img.addEventListener("click", function () {
      $main.appendChild(lightboxTemplate.cloneNode(true));
      var lightboxContainer = document.getElementById("lightbox-container");
      var lightbox = document.getElementById("lightbox");
      var lightboxOverlay = document.getElementById("lightbox-overlay");
      img.dataset.flipKey = "lightbox";
      src = img.getAttribute('src');
      console.log(src);
      lightbox.setAttribute('src', src);
      flipping.read();

      if (lightbox.complete) {
        setTimeout(function () {
          lightboxContainer.classList.remove("opacity-0");
        }, 100);
      }

      lightboxContainer.addEventListener("click", function () {
        lightboxContainer.classList.add('opacity-0');
        lightboxContainer.addEventListener('transitionend', function () {
          lightboxContainer.remove();
        });
      });
    });
  });
};
var musicSlider = document.querySelector("#music-slider");
var musicProgressBar = document.querySelector("#music-progress-bar");
var musicCurrentVal;
var musicWrapper = document.getElementById("music-state-wrapper");
var playState = musicWrapper.getAttribute("data-state");
var playButton = document.getElementById("music-play-button");
var playIcon = playButton.querySelector("#music-play-icon");
var pauseIcon = playButton.querySelector("#music-pause-icon");
var musicWindowWrapper = musicWrapper.closest(".window-wrapper");
var musicWindowCloseButton = musicWindowWrapper.querySelector('.window-close');
var musicLink = document.getElementById('music');
var closeAllButton = document.querySelector(".close-all");
var song;
var currentTimeSec;
var durationSeconds;
var request;
var currentSong;
var wasPlaying;
var title;
var thumbnail;
var src;
var tracks = document.querySelectorAll('.playlist-item');
var musicThumbnail = document.getElementById('music-thumbnail');
var musicTitle = document.getElementById('music-title');
musicSlider.addEventListener("input", function () {
  window.requestAnimationFrame(function () {
    musicProgressBar.style.transform = "scaleX(".concat(musicSlider.value / 100, ")");
  });

  if (song) {
    song.pause();
    song.seek(musicSlider.value * durationSeconds / 100);
  }
});
musicSlider.addEventListener("mousedown", function () {
  if (playState === "playing") {
    song.pause();
    wasPlaying = true;
  } else {
    wasPlaying = false;
  }
});
musicSlider.addEventListener("touchstart", function () {
  if (playState === "playing") {
    song.pause();
    wasPlaying = true;
  } else {
    wasPlaying = false;
  }
});
musicSlider.addEventListener("mouseup", function () {
  if (wasPlaying) {
    play();
  }
});
musicSlider.addEventListener("touchend", function () {
  if (wasPlaying) {
    play();
  }
});
playButton.addEventListener("click", function () {
  updatePlayState();
});

var updatePlayState = function updatePlayState() {
  if (playState === "paused") {
    play();
  } else if (playState === "playing") {
    pause();
  }
};

var updateProgressBar = function updateProgressBar() {
  request = requestAnimationFrame(updateProgressBar);
  currentTimeSec = song.seek();
  currentTimePercentage = currentTimeSec / durationSeconds * 100;
  setProgressBar(currentTimePercentage);
};

var setProgressBar = function setProgressBar(time) {
  musicSlider.value = time;
  musicProgressBar.style.transform = "scaleX(".concat(time / 100, ")");
};

var songLoading = function songLoading(target, index) {
  currentSong = index;
  playState = "loading";
  musicWrapper.setAttribute("data-state", playState);
  Howler.unload();
  musicSlider.setAttribute('disabled', "");
  playButton.setAttribute('disabled', "");
  homeMusicButtons.classList.add('pointer-events-none');
  setProgressBar(0);
  src = target.getAttribute('data-src');
  thumbnail = target.getAttribute('data-thumbnail');
  title = target.getAttribute('data-title');
  song = new Howl({
    src: ["".concat(src, ".webm"), "".concat(src, ".mp3")]
  });
  musicThumbnail.src = thumbnail;
  musicTitle.innerHTML = "Loading...";
  musicSlider.value = 0;
  cancelAnimationFrame(request);
};

var songLoaded = function songLoaded() {
  durationSeconds = song.duration();
  musicTitle.innerHTML = title;
  musicTitle.classList.remove('text-black-600');
  musicTitle.classList.add('text-black-900');
  play();
  musicSlider.removeAttribute('disabled');
  playButton.removeAttribute('disabled');
  homeMusicButtons.classList.remove('pointer-events-none');
};

var play = function play() {
  playState = "playing";
  musicWrapper.setAttribute("data-state", playState);
  revealPauseButton();
  song.play();
  updateProgressBar();
};

var pause = function pause() {
  playState = "paused";
  musicWrapper.setAttribute("data-state", playState);
  revealPlayButton();
  song.pause();
  cancelAnimationFrame(request);
};

var nextSong = function nextSong() {
  if (currentSong < tracks.length - 1) {
    pause();
    tracks[currentSong + 1].click();
  } else {
    pause();
    song.stop();
    resetMusic();
  }
};

var prevSong = function prevSong() {
  if (currentSong > 0) {
    pause();
    tracks[currentSong - 1].click();
  } else {
    pause();
    song.stop();
    resetMusic();
  }
};

var playSong = function playSong(target, index) {
  songLoading(target, index);
  song.on("load", function () {
    songLoaded();
  });
  song.on('end', function () {
    nextSong();
  });
};

tracks.forEach(function (track, index) {
  track.addEventListener('click', function () {
    if (playState === "playing") {
      pause();
    }

    if (currentSong === index) {
      play();
    } else {
      playSong(track, index);
    }

    tracks.forEach(function (track) {
      track.classList.remove('current');
    });
    track.classList.add('current');
  });
});

var resetMusic = function resetMusic() {
  currentSong = null;
  musicTitle.innerHTML = "Thanks for listening! ❤️";
  musicThumbnail.src = "";
  setProgressBar(0);
  musicSlider.setAttribute('disabled', "");
  playButton.setAttribute('disabled', "");
  tracks.forEach(function (track) {
    track.classList.remove('current');
  });
  homeMusicButtons.classList.remove('active');
};

var homeMusicButtons = document.getElementById("homeMusicButtons");
var homePlay = document.getElementById("homePlay");
var homePause = document.getElementById("homePause");
var homeNext = document.getElementById("homeNext");
var homePrev = document.getElementById("homePrev");
homePause.addEventListener('click', function () {
  pause();
});
homePlay.addEventListener('click', function () {
  play();
});
homeNext.addEventListener('click', function () {
  nextSong();
});
homePrev.addEventListener('click', function () {
  prevSong();
});

var revealPlayButton = function revealPlayButton() {
  homePause.classList.add('hidden');
  homePlay.classList.remove('hidden');
};

var revealPauseButton = function revealPauseButton() {
  homePause.classList.remove('hidden');
  homePlay.classList.add('hidden');
};

closeAllButton.addEventListener('click', function () {
  revealHomeButtons();
});
musicWindowCloseButton.addEventListener('click', function () {
  revealHomeButtons();
});
musicLink.addEventListener('click', function () {
  revealHomeButtons();
});

var revealHomeButtons = function revealHomeButtons() {
  if (currentSong >= 0) {
    if (playState != "paused") {
      setTimeout(function () {
        if (musicWindowWrapper.classList.contains('closed')) {
          homeMusicButtons.classList.add('active');
        } else {
          homeMusicButtons.classList.remove('active');
        }
      }, 100);
    } else {
      homeMusicButtons.classList.remove('active');
    }
  }
};
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
var LOCAL_STORAGE_THEME = "theme.mode";
var currentTheme;

if (localStorage.getItem(LOCAL_STORAGE_THEME)) {
  currentTheme = localStorage.getItem(LOCAL_STORAGE_THEME);
} else {
  currentTheme = 'light';
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_THEME, currentTheme);
}

document.documentElement.setAttribute('data-theme', currentTheme);

window.onload = function () {
  var themeSwitcher = document.getElementById('theme-switcher-input');

  if (currentTheme === "dark") {
    themeSwitcher.setAttribute('checked', true);
  }

  var addAttribute = function addAttribute() {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.classList.add('color-theme-in-transition');
    window.setTimeout(function () {
      document.documentElement.classList.remove('color-theme-in-transition');
    }, 1000);
    currentTheme = 'dark';
    save();
  };

  var removeAttribute = function removeAttribute() {
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.classList.add('color-theme-in-transition');
    window.setTimeout(function () {
      document.documentElement.classList.remove('color-theme-in-transition');
    }, 50);
    currentTheme = 'light';
    save();
  }; // addAttribute()


  themeSwitcher.addEventListener("change", function () {
    isChecked();
  });

  function isChecked() {
    var isChecked = themeSwitcher.checked;

    if (isChecked) {
      addAttribute();
    } else {
      removeAttribute();
    }
  }
};
var closedWindows = document.querySelectorAll(".closed");
var closeAll = document.querySelector(".close-all");
var closeAllButton = document.querySelector(".close-all button");
var windowWrappers = document.querySelectorAll(".window-wrapper");
var projectPreviews = document.querySelectorAll(".project-preview");
var closeButtons = document.querySelectorAll(".window-close");
var windowZ = 50;

var windowFunctions = function windowFunctions() {
  closeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var wrapper = button.closest(".window-wrapper");
      wrapper.classList.add("closed");
      checkClosedList();
    });
  });

  var bringToFront = function bringToFront(wrapper) {
    windowZ = windowZ + 1;
    wrapper.style.zIndex = windowZ;
    windowWrappers.forEach(function (wrapper) {
      wrapper.classList.add("disabled");
    });
    wrapper.classList.remove("disabled");
  };

  var windowOpen = function windowOpen(e, selector) {
    e.preventDefault();
    var elWindow = document.getElementById(selector);
    elWindow.classList.remove("closed");
    windowWrappers.forEach(function (wrapper) {
      wrapper.classList.add("disabled");
    });
    elWindow.classList.remove("disabled");
    windowZ = windowZ + 1;
    elWindow.style.zIndex = windowZ;
    closeButton = elWindow.querySelector('.window-close');
    closeButton.focus();
    closeButton.blur();
    checkClosedList();
  };

  var linkMe = document.getElementById("me");
  linkMe.addEventListener("click", function (e) {
    windowOpen(e, "meWindow");
  });
  var linkMusic = document.getElementById("music");
  linkMusic.addEventListener("click", function (e) {
    windowOpen(e, "musicWindow");
  });
  var linkJournal = document.getElementById("journal");
  linkJournal.addEventListener("click", function (e) {
    windowOpen(e, "journalWindow");
  });
  var linkPortfolio = document.getElementById("portfolio");
  linkPortfolio.addEventListener("click", function (e) {
    windowOpen(e, "portfolioWindow");
  });
  var linkContact = document.getElementById("contact");
  linkContact.addEventListener("click", function (e) {
    windowOpen(e, "contactWindow");
  });
  windowWrappers.forEach(function (wrapper) {
    wrapper.addEventListener("mousedown", function () {
      bringToFront(wrapper);
    });
  });
};

var checkClosedList = function checkClosedList() {
  closedWindows = document.querySelectorAll(".window-wrapper.closed");

  if (closedWindows.length < windowWrappers.length - 1) {
    closeAll.classList.add("visible");
  } else {
    closeAll.classList.remove("visible");
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
  projectPreviews.forEach(function (preview) {
    preview.classList.add("closed");
  });
  checkClosedList();
});
windowFunctions();