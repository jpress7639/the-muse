
const imageButton = document.querySelector('.image')
const quoteButton = document.querySelector('.quote')
const promptDiv = document.querySelector('.prompt')
const countDown = document.querySelector(".countdown")
const startSection = document.querySelector("#start")
const nextSection = document.querySelector('.next')
const writingSection = document.querySelector("#writing")
const finalInput = document.querySelector("#final")
const body = document.body
const star = document.querySelector('.star')
const starTwo = document.querySelector('.star-two')
const starThree = document.querySelector('.star-three')

//Night Sky - using the stars in the background in three separate divs 

const shootAcross = function() {
    return(Math.random() * window.innerWidth)
}

const shootDown = function () {
    return(Math.random() * window.innerHeight)
}

const shootingStar = function(star) {
    star.style.top = shootDown() + "px"
    star.style.left = shootAcross() + "px"
}


const newStar = function() {
    const newStar = document.createElement('div')
    newStar.className = ('star')
    body.append(newStar)  
    setInterval(function () {
        shootingStar(newStar)}, 3000); 
}

for (let i = 0; i < 50; i++) {
    newStar()
}

const newStarTwo = function() {
    const newStar = document.createElement('div')
    newStar.className = ('star-two')
    body.append(newStar)  
    setInterval(function () {
        shootingStar(newStar)}, 4000); 
}

for (let i = 0; i < 25; i++) {
    newStarTwo()
}

const newStarThree = function() {
    const newStar = document.createElement('div')
    newStar.className = ('star-three')
    body.append(newStar)  
    setInterval(function () {
        shootingStar(newStar)}, 5000); 
}

for (let i = 0; i < 20; i++) {
    newStarThree()
}
 

const newPlanet = function() {
    const newStar = document.createElement('div')
    newStar.className = ('planet')
    body.append(newStar)  
    setInterval(function () {
        shootingStar(newStar)}, 10000); 
}

for (let i = 0; i < 7; i++) {
    newPlanet()
}

//API Data Randomizing for the Prompt

const getPrompt = async () => {
    promptDiv.style.display= "block"
    startSection.style.height = "60%"
    imageButton.remove()
    quoteButton.remove()
    nextSection.remove()
    let instructions = document.createElement("p")
    instructions.innerText = `Here is your prompt! Write whatever comes into your mind before the countdown ends. Let it flow!`
    instructions.style.fontSize = "2em"
    instructions.style.color = "rgb(48, 47, 47)"
    instructions.style.textAlign = "center"
    instructions.style.padding = "20px"
    instructions.style.boxShadow = "10px 15px 25px 0 rgba(48, 47, 47, 0.5)"
    instructions.style.backgroundColor = "rgba(253, 255, 255, 0.5)"
    instructions.style.borderRadius = "50px"
    instructions.style.width = "80%"
    startSection.append(instructions)
    try {
        const url = "https://pixabay.com/api/?key=16950900-4b8a7189e0448d4be8704e6ae"
        const response = await axios.get(url)
        const newPrompt = response.data.hits
        let thePrompt = newPrompt[Math.floor(Math.random() * newPrompt.length)].webformatURL


        let img = document.createElement('img')
        img.setAttribute('src', thePrompt)
        img.style.width = "100%"
        img.style.height = "100%"
        img.style.margin = "10px"
        img.style.boxShadow = "10px 15px 25px 0"
        promptDiv.append(img)
        startTimer(10, countDown)
    } catch (error) {
        console.log(`this is your error, ${error}`)
    }
}

imageButton.addEventListener('click', getPrompt)

//The second API to use for prompts

const getQuote = async () => {
    promptDiv.style.display= "block"
    imageButton.remove()
    quoteButton.remove()
    nextSection.remove()
    let instructions = document.createElement("p")
    instructions.innerText = `Here is your prompt! Write whatever comes into your mind before the countdown ends. Let it flow!`
    instructions.style.fontSize = "2em"
    instructions.style.color = "rgb(48, 47, 47)"
    instructions.style.textAlign = "center"
    instructions.style.padding = "10px"
    instructions.style.boxShadow = "10px 15px 25px 0 rgba(48, 47, 47, 0.5)"
    instructions.style.backgroundColor = "rgba(253, 255, 255, 0.5)"
    instructions.style.borderRadius = "50px"
    instructions.style.width = "80%"
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
        post.style.fontSize = "1em"
        post.style.textAlign = "center"
        post.style.marginTop = "100px"
        post.style.lineHeight = "45px"
        promptDiv.append(post)
        startTimer(10, countDown)
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
          // In case the clipboard API Provides an Error or they can't copy for some reason
          console.error('Could not copy text: ', err);
        });
    } else {
        alert("It's always better to get the text out. Who knows? Maybe you'll find some treasure")
    }
}