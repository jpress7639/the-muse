
const imageButton = document.querySelector('.image')
const quoteButton = document.querySelector('.quote')
const promptDiv = document.querySelector('.prompt')
const countDown = document.querySelector(".countdown")
const startSection = document.querySelector("#start")
const writingSection = document.querySelector("#writing")
const finalInput = document.querySelector("#final")
const body = document.querySelector('body')
// promptButton.addEventListener('click', writingTime)

// writingTime () {

// }

//API Data Randomizing for the Prompt

const getPrompt = async () => {
    startTimer(10, countDown)
    imageButton.remove()
    quoteButton.remove()
    let instructions = document.createElement("p")
    instructions.innerText = `Here is your prompt! Write whatever comes into your mind before the countdown ends. Let it flow!`
    instructions.style.fontSize = "40px"
    instructions.style.color = "rgb(48, 47, 47)"
    instructions.style.textAlign = "center"
    instructions.style.padding = "10px"
    instructions.style.boxShadow = "10px 15px 25px 0 rgba(48, 47, 47, 0.5)"
    instructions.style.backgroundColor = "rgba(253, 255, 255, 0.5)"
    startSection.append(instructions)
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
        img.style.boxShadow = "10px 15px 25px 0"
        promptDiv.append(img)
    } catch (error) {
        console.log(`this is your error, ${error}`)
    }
}

imageButton.addEventListener('click', getPrompt)

const getQuote = async () => {
    startTimer(10, countDown)
    imageButton.remove()
    quoteButton.remove()
    let instructions = document.createElement("p")
    instructions.innerText = `Here is your prompt! Write whatever comes into your mind before the countdown ends. Let it flow!`
    instructions.style.fontSize = "40px"
    instructions.style.color = "rgb(48, 47, 47)"
    instructions.style.textAlign = "center"
    instructions.style.padding = "10px"
    instructions.style.boxShadow = "10px 15px 25px 0 rgba(48, 47, 47, 0.5)"
    instructions.style.backgroundColor = "rgba(253, 255, 255, 0.5)"
    startSection.append(instructions)
    try {
        const quoteURL = "https://quote-garden.herokuapp.com/api/v2/quotes?page=1&limit=10"
        const quoteResponse = await axios.get(quoteURL)
        const quotePrompt = quoteResponse.data.quotes
        let theQuote = quotePrompt[Math.floor(Math.random() * quotePrompt.length)].quoteText
        let author = quotePrompt[Math.floor(Math.random() * quotePrompt.length)].quoteAuthor
        console.log (theQuote, author)
        let post = document.createElement('p')
        post.innerHTML = (`${theQuote} <br> <em>${author}</em>`)
        post.style.backgroundColor = "rgba(253,255,255, 0.8)"
        post.style.boxShadow = "10px 15px 25px 0"
        post.style.fontSize = "35px"
        post.style.textAlign = "center"
        post.style.marginTop = "100px"
        post.style.lineHeight = "50px"
        promptDiv.append(post)
    } catch (error) {
        console.log(`this is your error, ${error}`)
    }
}

quoteButton.addEventListener('click', getQuote)

// Countdown 
// https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
 
function startTimer(duration, display) {
    countDown.style.display = "flex"
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
    pTag.style.color = "rgb(239, 206, 21)"
    pTag.style.boxShadow = ("10px 15px 25px 0 rgba(239, 206, 21, 0.7)")
    listItem.append(pTag)
    listItem.style.color = "#f2d665"
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