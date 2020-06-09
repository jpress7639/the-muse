
const promptButton = document.querySelector('#start-button')
const promptDiv = document.querySelector('.prompt')
// promptButton.addEventListener('click', writingTime)

// writingTime () {

// }

const getPrompt = async () => {
    try {
        const url = "https://pixabay.com/api/?key=16950900-4b8a7189e0448d4be8704e6ae"
        const response = await axios.get(url)
        console.log(response)
        const newPrompt = response.data.hits
        let webURL = []
        for (let i = 0; i < newPrompt.length; i++) {
            webURL = newPrompt[i]
        }

        console.log(webURL.webformatURL)

        // let img = document.createElement('img')
        // img.setAttribute('src', newPrompt)
        // promptDiv.append(img)
    } catch (error) {
        console.log(`this is your error, ${error}`)
    }
}

promptButton.addEventListener('click', getPrompt)
