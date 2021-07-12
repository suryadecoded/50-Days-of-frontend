const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.getElementsByClassName('circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    update()
})

prev.addEventListener('click', () => {
    currentActive--
    update()
})

function update() {
    [...circles].forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.getElementsByClassName('active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}
