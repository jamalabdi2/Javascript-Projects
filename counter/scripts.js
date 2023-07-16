const decreaseButton = document.getElementById("decreaseButton")
const resetButton = document.getElementById("resetButton")
const increaseButton = document.getElementById("increaseButton")
const counter = document.getElementById("counter")

decreaseButton.addEventListener("click",decrement)
increaseButton.addEventListener("click",increment)
resetButton.addEventListener("click",reset)
let counterValue;

function initializeCounter() {
    counterValue = Number(counter.textContent);
    updateCounterColor()
}

function updateCounterColor() {
    if (counterValue < 0) {
        counter.style.color = "red";
    } else {
        counter.style.color = "green";
    }
}


function increment(e){
    counter.textContent = counterValue+=1
    updateCounterColor()
}

function decrement(e){
    counter.textContent = counterValue-=1
    updateCounterColor()
}

function reset(e){
    counterValue = 0
    counter.textContent = counterValue
    updateCounterColor();
}

initializeCounter()

//set limit
//increase by 5 or 10
//use local storage