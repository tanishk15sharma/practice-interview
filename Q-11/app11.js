const inputPassword = document.querySelector("#input-pass")
const button = document.querySelector("#checkbtn")
const outPut = document.querySelector("#output")


button.disabled = true;
button.addEventListener("click", checkPassword)


function checkPassword() {
    let value = inputPassword.value;

    if (value.length < 10) {
        button.disabled = true;
        outPut.innerText = 'error'

    } else {
        button.disabled = false;
        outPut.innerText = 'successful'
        inputPassword.style.border =  " 1px solid green "
    }
}
inputPassword.addEventListener("input", function () {
    let value = inputPassword.value;
    if (value.length < 10) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
})