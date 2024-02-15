const button = document.querySelector("button")
const input = document.querySelector("input")
const p = document.querySelector("p")

button.addEventListener("click",check)

function check(){
    let text=input.value.trim()
    
    if(text!==" "){
        let reversedtext = text.split("").reverse().join("");
        if(reversedtext===text){
            p.textContent="It is a polindrome"
        }
        else{
            p.textContent="It is not a polindrome"
        }
    }
}
