const apiBtn = document.querySelector("#apibtn") ;
const textApi = document.querySelector("#text") ;
const outPut = document.querySelector("#output")
 

var URL = "https://unitube-server.herokuapp.com/playlists" 

apiBtn.addEventListener("click",clickHandler )


function clickHandler () {
    fetch(URL) 
    .then(response => {
        if (response.status === 401 ) {
             outPut.innerText=  response.statusText  
 
            //   console.log(response);     
        }
    }
    )
}
