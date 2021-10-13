//Sample Q15
//Create two objects with name, age, and power as Ram, 2500, Treta. Krishna, 2325, Dwapar Write a function which takes two objects and return the person with more power.

const checkBtn = document.querySelector("#checkbtn")
const outPut = document.querySelector("#output")

var ramData = {
    name :"ram" ,
    power: "2500" ,
    yuga : "Treta" ,
}
var krishnaData = {
    name :"Krishna" ,
    power: "2125" ,
    yuga : "Dwapar" ,
}

function checkPower (ramData,krishnaData) {
    if(ramData.power > krishnaData.power) {
        outPut.innerText = ramData.name 
    }else {
        outPut.innerText = krishnaData.name
    }
}
checkBtn.addEventListener("click", function () {  checkPower (ramData,krishnaData)} )