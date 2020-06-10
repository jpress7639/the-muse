
const promptButton = document.querySelector('#start-button')
const promptDiv = document.querySelector('.prompt')
const countDown = document.querySelector(".countdown")
const startSection = document.querySelector("#start")
const writingSection = document.querySelector("#writing")
const finalInput = document.querySelector("#final")
// promptButton.addEventListener('click', writingTime)

// writingTime () {

// }

//API Data Randomizing for the Prompt

const getPrompt = async () => {
    startTimer(10, countDown)
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
// https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
 
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer === 0) {
            countDown.remove();
            promptDiv.remove();
            startSection.remove();
            writingSection.style.display = "grid"
        }
    }, 1000);
}


// Countdown Clock


//List Making 

const wordsList = document.querySelector(".phrases")
const input = document.querySelector("#list")
const addButton = document.querySelector(".add")
const finalButton = document.querySelector("#submit")

addButton.addEventListener('click', addKeyWord)

function addKeyWord(e) {
    e.preventDefault()
    let listItem = document.createElement("li")
    listItem.classList = ""
    let pTag = document.createElement("p")
    pTag.innerText = input.value
    listItem.append(pTag)
    // listItem.addEventListener('click', deleteWord)
    if (input.value !== "") {
        wordsList.append(listItem)
    }
    input.value = ""
}

finalButton.addEventListener('click', saveProse)

//COPYING PROSE TO CLIPBOARD FOR EXTERNAL USE 
//from Mozilla Developer to interact with clipboard to copy
function saveProse(e) {
    e.preventDefault()
    let prose = finalInput.value
    if (prose !== "") {
        navigator.clipboard.writeText(prose)
        .then(() => {
          alert('Text copied to clipboard');
        })
        .catch(err => {
          // In case the clipboard API Provides an Error ro they can't copy for some reason
          console.error('Could not copy text: ', err);
        });
    } else {
        alert("It's always better to get the text out. Who knows? Maybe you'll find some treasure")
    }
}