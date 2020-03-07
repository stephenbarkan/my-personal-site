    //change heart to/from red and change accompanying text
    const igHeart = document.querySelector('.ig-heart-btn')
    const igHeartSvg = igHeart.querySelector('svg')
    const igHeartText = document.querySelector('.ig-heart-text')
    const igCaptions = document.querySelectorAll('.ig-caption-container')

    const instagramHeart = function () {
        if (igHeart.classList.contains('liked')) {
            igHeart.classList.remove('liked')
            igHeartText.textContent = "0 Likes"
        } else {
            igHeart.classList.add('liked')
            igHeartText.textContent = "1 Like!"
        }

        igHeart.classList.add('animating')
        igHeart.addEventListener('animationend', () => {
            igHeart.classList.remove('animating')
        })
    }

    igHeart.addEventListener('click', function (e) {
        e.preventDefault()
        instagramHeart()
    })

    igCaptions.forEach(caption => {
        caption.addEventListener('click', function () {
            if (caption.classList.contains('reveal')) {
                caption.classList.remove('reveal')
            } else {
                caption.classList.add('reveal')
            }
        })
    })