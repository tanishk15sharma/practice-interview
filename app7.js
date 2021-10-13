const inputText = document.querySelector("#inputtext")
const printBtn = document.querySelector ("#printbtn") 
const outPut = document.querySelector("#output")


var URL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text="


function clickHandler (text) {
    fetch(URL + text )
    .then(Response => Response.json()  ) 
    .then(
        data => {
            outPut.innerText = `${data.contents.translated} ${(data.contents.text).toUpperCase() }`
        }
    )
}

printBtn.addEventListener("click",function () {
    clickHandler(inputText.value)
} )