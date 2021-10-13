const inputText = document.querySelector("#inputtext")
const increaseBtn = document.querySelector("#increasetext")
const decreaseBtn = document.querySelector("#decreasetext")

increaseBtn.addEventListener("click",textIncrease )
decreaseBtn.addEventListener("click",textDecrease )

var defaultSize = 16

function textIncrease () {
    defaultSize =   defaultSize + 2  
    inputText.style.fontSize = `${defaultSize}px`
}
function textDecrease () {
    defaultSize =   defaultSize - 2  
    inputText.style.fontSize = `${defaultSize}px`
}