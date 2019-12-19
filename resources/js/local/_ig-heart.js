    //change heart to/from red and change accompanying text
    const igHeart = document.querySelector('.ig-heart')
    const igHeartSvg = igHeart.querySelector('svg')
    const igHeartText = document.querySelector('.ig-heart-text')

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