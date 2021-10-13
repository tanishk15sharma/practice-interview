const inputText = document.querySelector("#inputtext") 
const redBtn = document.querySelector("#redbtn")
const blueBtn = document.querySelector("#bluebtn")
const greenBtn = document.querySelector("#green")
const outPut = document.querySelector("#output")

inputText.addEventListener("input",function () {
    displayText(inputText.value)
} )
redBtn.addEventListener("click",redText );
blueBtn.addEventListener("click",blueText );
greenBtn.addEventListener("click",greenText );




function displayText (text) {
    outPut.innerHTML = text

}

function redText () {
    outPut.style.color = "red"

    
}
function blueText () {
    outPut.style.color = "blue"

    
}
function greenText () {
    outPut.style.color = "green"

    
}

