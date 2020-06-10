
const promptButton = document.querySelector('#start-button')
const promptDiv = document.querySelector('.prompt')
const countDown = document.querySelector(".countdown")
const startSection = document.querySelector("#start")
// promptButton.addEventListener('click', writingTime)

// writingTime () {

// }

//API Data Randomizing for the Prompt

const getPrompt = async () => {
    countdown(5)
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
        img.style.width = "100%"
        img.style.height = "400px"
        promptDiv.append(img)
    } catch (error) {
        console.log(`this is your error, ${error}`)
    }
}

promptButton.addEventListener('click', getPrompt)
// Countdown 
// https://gist.github.com/adhithyan15/4350689
function countdown(minutes) {
    let seconds = 60;
    let mins = minutes
    function tick() {
        let counter = document.getElementById("countdown");
        let current_minutes = mins - 1
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        countDown.append(counter)
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
            if(mins > 1) {
                countdown(mins - 1);           
            }
        } if (seconds === 0, minutes === 0) {
            console.log("Times UP")
    }
    }
    tick();
}

// Countdown Clock
// found on https://gist.github.com/steveosoule/5053007
// let writingTime = new Date().setTime(30000)

// let currentTime = new Date().getTime()

// let remainingTime = writingTime - currentTime

// let mins = Math.floor((remainingTime/1000)/60)
// let secs = Math.floor(remainingTime/1000)

// function countdown() {
//         setTimeout(Decrement(writingTime), 1000)
// }

// function Decrement() {
//     if (document.getElementById) {
//         if (writingTime < currentTime) {
//             // countDown.remove()
//             // startSection.remove()
//             console.log("Times UP")
//         }
//        let minutes = document.getElementById("minutes")
//        let seconds = document.getElementById("seconds")
//         if (seconds < 59) {
//             seconds.innerHTML = secs
//         } else {
//             minutes.innerHTML = getMinutes()
//             seconds.innerHTML = getSeconds()
//         }
//         secs --;
//         setTimeout(Decrement(), 1000)
//     }   
// }
// function getMinutes() {
//     mins = Math.floor(secs / 60)
// }
// function getSeconds() {
//     console.log(secs-Math.round(mins * 60))
// }

//List Making 

// const wordsList = document.querySelector(".phrases")
// const addButton = document.querySelector(".add")

// addButton.addEventListener('click', addKeyWord)

// const addKeyWord = function(e) {
//     e.preventDefault()
//     let input = document.querySelector("#list")
//     const value = input.value
// }
