const hrs = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const session = document.getElementById("session")


function displayTime(){
    const date = new Date()
    hrs.innerHTML = date.getHours()
    minutes.innerHTML = date.getMinutes()
    seconds.innerHTML = date.getSeconds()
    if(hrs>=12){
        session.innerHTML = "PM"
    }else{
        session.innerHTML = "AM"
    }


}
setInterval(displayTime,10)