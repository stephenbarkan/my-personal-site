// Config
// Selectors
// store selectors for reference so we only call them once
var $body = document.querySelector('body');
var $header = document.getElementById('#header');
var $nav = document.getElementById('#nav');
var $footer = document.getElementById('#footer');
// Helpers
var
/**
* @description Test if the body id is something
* @param  		{string}
* @return 		{bool}
*
*/
page = function page(name) {
  if (!name) {
    return $body.getAttribute('id');
  }

  return $body.getAttribute('id') == name;
};
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

  var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
  var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy; // translate the element

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
var igHeart = document.querySelector('.ig-heart');
var igHeartSvg = igHeart.querySelector('svg');
var igHeartText = document.querySelector('.ig-heart-text');

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

var next = function next() {
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

var previous = function previous() {
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

igLeft.addEventListener('click', function () {
  previous();
});
igRight.addEventListener('click', function () {
  next();
});
igLeft.style.visibility = "hidden";
igUpdate();
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
musicWindowCloseButton.addEventListener('click', function () {
  pause();
});
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
  setProgressBar(0);
  src = target.getAttribute('data-src');
  thumbnail = target.getAttribute('data-thumbnail');
  title = target.getAttribute('data-title');
  song = new Howl({
    src: [src]
  });
  musicThumbnail.src = thumbnail;
  musicTitle.innerHTML = "Loading...";
  musicSlider.value = 0;
  cancelAnimationFrame(request);
};

var songLoaded = function songLoaded() {
  durationSeconds = song.duration();
  musicTitle.innerHTML = title;
  play();
  musicSlider.removeAttribute('disabled');
  playButton.removeAttribute('disabled');
};

var play = function play() {
  playState = "playing";
  musicWrapper.setAttribute("data-state", playState);
  song.play();
  updateProgressBar();
};

var pause = function pause() {
  playState = "paused";
  musicWrapper.setAttribute("data-state", playState);
  song.pause();
  cancelAnimationFrame(request);
};

var playSong = function playSong(target, index) {
  songLoading(target, index);
  song.on("load", function () {
    songLoaded();
  });
  song.on('end', function () {
    if (currentSong < tracks.length - 1) {
      pause();
      tracks[currentSong + 1].click();
    } else {
      pause();
      song.stop();
      resetMusic();
    }
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
  currentSong = tracks.length;
  musicTitle.innerHTML = "Thanks for listening! ❤️";
  musicThumbnail.src = "";
  musicSlider.setAttribute('disabled', "");
  playButton.setAttribute('disabled', "");
  tracks.forEach(function (track) {
    track.classList.remove('current');
  });
};
var closedWindows = document.querySelectorAll(".closed");
var closeAllButton = document.querySelector(".close-all");
var windowWrappers = document.querySelectorAll(".window-wrapper");
var closeButtons = document.querySelectorAll(".window-close");
var windowZ = 10;

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
  var linkAbout = document.getElementById("about");
  linkAbout.addEventListener("click", function (e) {
    windowOpen(e, "aboutWindow");
  });
  var linkPortfolio = document.getElementById("portfolio");
  linkPortfolio.addEventListener("click", function (e) {
    windowOpen(e, "portfolioWindow");
  });
  windowWrappers.forEach(function (wrapper) {
    wrapper.addEventListener("mousedown", function () {
      bringToFront(wrapper);
    });
  });
};

var checkClosedList = function checkClosedList() {
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