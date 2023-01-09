const redBar = document.querySelector(".red-bar")
const whiteBar = document.querySelector(".white-bar")
const loadingSignal = document.querySelector(".loading-signal")

let redCount = 0
let whiteCount = 100
window.addEventListener('DOMContentLoaded', () => {
    const intervalLoading = setInterval(() => {
        redBar.style.width = `${redCount++}%`
        whiteBar.style.width = `${whiteCount--}%`
        /* console.log(redCount++); */
        loadingSignal.innerHTML = `Loading ${redCount}%...`
        if (whiteCount === 0) {
            clearInterval(intervalLoading)
        }
    }, 50)

})