const checkBtn = document.querySelector("#checkbtn")
const outPut = document.querySelector("#output")

//checkBtn.addEventListener("click", checkAge(ramData,krishnaData)  )
var ramData = {
    name: " ram",
    age: "25",
    yuga: " Treta ",
}
var krishnaData = {
    name: " Krishna ",
    age: "31",
    yuga: " Dwapar ",
}
function checkAge(ramData, krishnaData) {
    if (ramData.age < krishnaData.age) {
        outPut.innerText = krishnaData.name
    } else {
        outPut.innerText = ramData.name
    }
}
//checkAge(ramData, krishnaData)
checkBtn.addEventListener("click",function () {

 checkAge(ramData,krishnaData) } )
