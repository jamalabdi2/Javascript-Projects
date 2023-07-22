const title = document.getElementById("title")
const author = document.getElementById("author")
const ISBN = document.getElementById("ISBN")
const form = document.getElementById("form")
const submitButton = document.getElementById("submitBtn")
const alertMessage = document.getElementById("alert")


form.addEventListener("submit",(e) =>{
    e.preventDefault()
    localStorage.clear()
    if(preventEmptyValues()){
        console.log("form submitted")
        displayData()
        getAllBooks()
        const title = document.getElementById("title")
        const author = document.getElementById("author")
        const ISBN = document.getElementById("ISBN")
        addBooks(title,author,ISBN)

    }else{
        console.log("something wrong")
    }

})

function preventEmptyValues(){
    return title.value !== "" && author.value !== "" && ISBN.value !==""
}
function displayData(){
    const tableBody = document.getElementById("tableBody")
    const tableRow = document.createElement("tr")
    tableRow.innerHTML = `
        <td>${title.value}</td>
        <td>${author.value}</td>
        <td>${ISBN.value}</td>
        <td><a href="#" class="btn delete">X</a></td>
    `
    tableBody.appendChild(tableRow)
}

tableBody.addEventListener("click",(e) =>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.parentElement.remove()
        alertError()
    }

})

function alertError() {
    document.body.style.background = "red"
    alertMessage.textContent = "You have removed list";
    setTimeout(() => {
      alertMessage.textContent = "";
    }, 2000); // The message will disappear after 2000 milliseconds (2 seconds)
}

function getAllBooks(){
    //check if the local storage is empty 
    //if null create an empty list
    //else retrieve the data
    let allbooks;
    if(localStorage.getItem("books") === null){
        allbooks = []
    }else{
        allbooks = JSON.parse(localStorage.getItem("books"))
    }
    return allbooks
}

function addBooks(title,author,ISBN){
    book = {
        title:title,
        author:author,
        ISBN:ISBN
    }
    const allbooks = getAllBooks()
    allbooks.push(book)
    localStorage.setItem("books",JSON.stringify(allbooks))

}

