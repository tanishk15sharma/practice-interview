const inputText = document.querySelector("#input-txt")
const h1Btn = document.querySelector("#h1btn")
const h2Btn = document.querySelector("#h2btn")
const h3Btn = document.querySelector("#h3btn")
const outPut = document.querySelector("#outputtxt")

inputText.addEventListener("input", function () {
    displayOutput(inputText.value)
})
h1Btn.addEventListener("click",h1Text )
h2Btn.addEventListener("click",h2Text )
h3Btn.addEventListener("click",h3Text )

function displayOutput(text) {
    outPut.innerHTML = text
}
function h1Text () {
    displayOutput(`<h1>${inputText.value}</h1> `)
}
function h2Text () {
    displayOutput(`<h2>${inputText.value}</h2> `)
}
function h3Text() {
    displayOutput(`<h3>${inputText.value}</h2> `)
}