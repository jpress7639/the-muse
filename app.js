
const promptButton = document.querySelector('#start-button')
const promptDiv = document.querySelector('.prompt')
const countdown = document.querySelector(".countdown")
const startSection = document.querySelector("#start")
// promptButton.addEventListener('click', writingTime)

// writingTime () {

// }

const getPrompt = async () => {
    promptButton.remove()
    try {
        const url = "https://pixabay.com/api/?key=16950900-4b8a7189e0448d4be8704e6ae"
        const response = await axios.get(url)
        // console.log(response)
        const newPrompt = response.data.hits
        let thePrompt = newPrompt[Math.floor(Math.random() * newPrompt.length)].webformatURL
        // console.log(thePrompt)

        let img = document.createElement('img')
        img.setAttribute('src', thePrompt)
        img.style.width = "500px"
        img.style.height = "400px"
        promptDiv.append(img)
    } catch (error) {
        console.log(`this is your error, ${error}`)
    }
}

promptButton.addEventListener('click', getPrompt)

// const countdown = setInterval(function () {
//     let startingTime = "00:02:00"
//     let now = new Date().getTime();
//     let remainingTime = startingTime - now

//     let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
//     let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000)

//    let minute = document.createElement("p")
//    minute.innerHTML = minutes + "m"
//    let second = document.createElement("p")
//    second.innerHTML = seconds + "s"
//    countdown.append(minutes + seconds)

// //    if (remainingTime === 0) {
// //        startSection.display = "none"
// //    }
// }, 1000)
