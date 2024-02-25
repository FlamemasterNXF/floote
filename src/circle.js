const valueContainer = document.querySelector(".value-container")
let progressBar = document.getElementById("bar0")

function progress(x, diff){
    let progressValue = x >= 100 ? 100 : x

    valueContainer.textContent = `${format(progressValue)}%`
    progressBar.style.background = `conic-gradient(
      rgb(232, 139, 16) ${progressValue * 3.6}deg,
      #000 ${progressValue * 3.6}deg
    )`

    if(data.circle.progress >= 100) return data.circle.progress = 100
    data.circle.progress += 1*diff
}
