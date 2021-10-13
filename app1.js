const input1 = document.querySelector("#input1")
const input2 = document.querySelector("#input2")
const addBtn = document.querySelector("#add")
const minusBtn = document.querySelector("#minus")
const intoBtn = document.querySelector("#into")
const divideBtn = document.querySelector("#divide")
const outPut = document.querySelector("#output")


addBtn.addEventListener("click", addition)
minusBtn.addEventListener("click", substraction)
intoBtn.addEventListener("click", multiplication)
divideBtn.addEventListener("click", division)





function addition(value1, value2) {
    var value1 = Number(input1.value);
    var value2 = Number(input2.value);

    let sum = value1 + value2;
    outPut.innerText = sum
}
function substraction(value1, value2) {
    var value1 = Number(input1.value);
    var value2 = Number(input2.value);

    let sum = value1 - value2;
    outPut.innerText = sum
}
function multiplication(value1, value2) {
    var value1 = Number(input1.value);
    var value2 = Number(input2.value);

    let sum = value1 * value2;
    outPut.innerText = sum
}
function division(value1, value2) {
    var value1 = Number(input1.value);
    var value2 = Number(input2.value);

    let sum = value1 / value2;
    outPut.innerText = sum
}












