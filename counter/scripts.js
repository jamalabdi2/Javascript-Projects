const buttons = document.getElementsByClassName("btn")
const counterDisplay = document.getElementById("counter")
let counter = 0

Array.from(buttons).forEach((buttonType) =>{
    buttonType.addEventListener("click",handleButtons)
    
})

function handleButtons(){
    if(this.classList.contains("increase")){
        counterDisplay.textContent = ++counter
    }else if(this.classList.contains("decrease")){
        counterDisplay.textContent = --counter
    }else{
        counter = 0
        counterDisplay.textContent = counter
    }
    changeCounterColor()
}

function changeCounterColor(){
    if (counter<0){
        counterDisplay.style.color = "red"
    }else if(counter>0){
        counterDisplay.style.color = "green"
    }else{
        counterDisplay.style.color = "black"
    }

}