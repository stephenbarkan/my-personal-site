let current = 0
const igImages = document.querySelectorAll('.ig-image')
let totalImages = igImages.length

const igDots = document.querySelectorAll('.ig-dot')
const igCaptions = document.querySelectorAll('.ig-caption')
const igDates = document.querySelectorAll('.ig-date')

const igLeft = document.querySelector('.ig-left')
const igRight = document.querySelector('.ig-right')
const igSlider = document.querySelector('.ig-slider')

igImages.forEach(function (image, i) {
    image.style.transform = `translateX(${100 * i}%)`
})

const igUpdate = function () {
    igDots.forEach(function (dot, i) {
        if (i === current) {
            dot.classList.add('current')
        } else {
            dot.classList.remove('current')
        }
    })


    igCaptions.forEach(function (caption, i) {
        if (i === current) {
            caption.classList.add('current')
        } else {
            caption.classList.remove('current')
        }
    })

    igDates.forEach(function (date, i) {
        if (i === current) {
            date.classList.add('current')
        } else {
            date.classList.remove('current')
        }
    })
}

const next = function () {
    current = current + 1
    igLeft.style.visibility = `visible`
    if (current >= totalImages - 1) {
        current = totalImages - 1
        igRight.style.visibility = `hidden`
        igLeft.focus()
    }
    moveSlider()
    igUpdate()
}

const previous = function () {
    current = current - 1
    igRight.style.visibility = `visible`
    if (current <= 0) {
        current = 0
        igLeft.style.visibility = `hidden`
        igRight.focus()
    } else {

    }
    moveSlider()
    igUpdate()

}

const moveSlider = function () {
    igSlider.style.transform = `translateX(${current * -100}%)`
}

igLeft.addEventListener('click', function () {
    previous()
})

igRight.addEventListener('click', function () {
    next()
})

igLeft.style.visibility = `hidden`
igUpdate()