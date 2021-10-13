//Here's an API, it can give two errors. Either 404, or 401. If the error is 404, show the user 'page not found' and if the error is 401, show the user 'you are not logged in'.


const checkError = document.querySelector("#checkerror")
const outPut = document.querySelector("#output")

// var URL ="https://unitube-server.herokuapp.com/playlists" 
var URL = "https://jsonplaceholder.typicode.com/dummyUsers"


checkError.addEventListener("click", clickHandler)

function clickHandler() {
    fetch(URL)
        .then(error => {
            if (error.status === 401) {
                outPut.innerText = `${error.status}  you are not logged in`

            } else if (error.status === 404  ) {
                outPut.innerText = `${error.status}  page not found `
            }
           }   ) 
}