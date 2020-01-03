const musicSlider = document.querySelector("#music-slider");
const musicProgressBar = document.querySelector("#music-progress-bar");
let musicCurrentVal;

const musicWrapper = document.getElementById("music-state-wrapper");
let playState = musicWrapper.getAttribute("data-state");
const playButton = document.getElementById("music-play-button");
const playIcon = playButton.querySelector("#music-play-icon");
const pauseIcon = playButton.querySelector("#music-pause-icon");
const musicWindowWrapper = musicWrapper.closest(".window-wrapper");
const musicWindowCloseButton = musicWindowWrapper.querySelector('.window-close')
const closeAllButton = document.querySelector(".close-all");

let song
let currentTimeSec
let durationSeconds
let request
let currentSong
let wasPlaying
let title
let thumbnail
let src

const tracks = document.querySelectorAll('.playlist-item')
const musicThumbnail = document.getElementById('music-thumbnail')
const musicTitle = document.getElementById('music-title')

musicWindowCloseButton.addEventListener('click', function () {
  pause()
})

closeAllButton.addEventListener('click', function () {
  pause()
})

musicSlider.addEventListener("input", function () {
  window.requestAnimationFrame(function () {
    musicProgressBar.style.transform = `scaleX(${musicSlider.value / 100})`;
  });
  if (song) {
    song.pause()
    song.seek(musicSlider.value * durationSeconds / 100)
  }
});

musicSlider.addEventListener("mousedown", function () {
  if (playState === "playing") {
    song.pause()
    wasPlaying = true
  } else {
    wasPlaying = false
  }
})

musicSlider.addEventListener("touchstart", function () {
  if (playState === "playing") {
    song.pause()
    wasPlaying = true
  } else {
    wasPlaying = false
  }
})

musicSlider.addEventListener("mouseup", function () {
  if (wasPlaying) {
    play()
  }
})

musicSlider.addEventListener("touchend", function () {
  if (wasPlaying) {
    play()
  }
})

playButton.addEventListener("click", function () {
  updatePlayState()
});



const updatePlayState = function () {
  if (playState === "paused") {
    play()
  } else if (playState === "playing") {
    pause()
  }
}

const updateProgressBar = function () {
  request = requestAnimationFrame(updateProgressBar)
  currentTimeSec = song.seek()
  currentTimePercentage = currentTimeSec / durationSeconds * 100
  setProgressBar(currentTimePercentage)
}

const setProgressBar = function (time) {
  musicSlider.value = time
  musicProgressBar.style.transform = `scaleX(${time / 100})`;
}

const songLoading = function (target, index) {
  currentSong = index
  playState = "loading"
  musicWrapper.setAttribute("data-state", playState);
  Howler.unload()
  musicSlider.setAttribute('disabled', "")
  playButton.setAttribute('disabled', "")
  setProgressBar(0)

  src = target.getAttribute('data-src')
  thumbnail = target.getAttribute('data-thumbnail')
  title = target.getAttribute('data-title')

  song = new Howl({
    src: [src]
  });

  musicThumbnail.src = thumbnail
  musicTitle.innerHTML = "Loading..."
  musicSlider.value = 0
  cancelAnimationFrame(request)
}

const songLoaded = function () {
  durationSeconds = song.duration()
  musicTitle.innerHTML = title
  play()
  musicSlider.removeAttribute('disabled')
  playButton.removeAttribute('disabled')
}

const play = function () {
  playState = "playing";
  musicWrapper.setAttribute("data-state", playState);
  song.play()
  updateProgressBar()
}

const pause = function () {
  playState = "paused";
  musicWrapper.setAttribute("data-state", playState);
  song.pause()
  cancelAnimationFrame(request)
}


const playSong = function (target, index) {

  songLoading(target, index)

  song.on("load", function () {
    songLoaded()
  })

  song.on('end', function () {
    if (currentSong < tracks.length - 1) {
      pause()
      tracks[currentSong + 1].click()
    } else {
      pause()
      song.stop()
      resetMusic()
    }
  })
}

tracks.forEach(function (track, index) {
  track.addEventListener('click', function () {
    if (playState === "playing") {
      pause()
    }

    if (currentSong === index) {
      play()
    } else {
      playSong(track, index)
    }

    tracks.forEach(track => {
      track.classList.remove('current')
    })
    track.classList.add('current')
  })
})

const resetMusic = function () {
  currentSong = tracks.length
  musicTitle.innerHTML = "Thanks for listening! ❤️"
  musicThumbnail.src = ""
  musicSlider.setAttribute('disabled', "")
  playButton.setAttribute('disabled', "")
  tracks.forEach(track => {
    track.classList.remove('current')
  })
}