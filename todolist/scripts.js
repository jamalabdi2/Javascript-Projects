// const addTodoList = document.getElementById("addTodoList")
// const todoLists = document.getElementById("todoLists")

// //add enter events
// addTodoList.addEventListener("keydown",(e) =>{
//     if(e.key === "Enter"){
//         const value = addTodoList.value.trim()
//         if(value !== ""){
//             saveToLocalStorage(value)
//             const todolistsItemsFromLocalStorage = getFromLocalStorage()
//             todolistsItemsFromLocalStorage.forEach((list) =>{
//                 const listItem = document.createElement("li")
//                 listItem.innerHTML = `<a href="#">${list.title}</a>`
//                 todoLists.appendChild(listItem)
//             })
//             addTodoList.value = ""
        
//         }
//     }
    
// })

// function getFromLocalStorage (){
//     //check if the local storage is null if so initialize list to emptylist
//     //if not null set item 
//     let todolists
//     if(localStorage.getItem("todolists") === null){
//         todolists = []
//     }else{
//         todolists = JSON.parse(localStorage.getItem("todolists"))
       
//     }
//     return todolists

// }
// function saveToLocalStorage(list){
//     const date = new Date()
//     todoListItem = {
//         title:list,
//         timeCreated:date.toLocaleString()
//     }
//     const getTodoLists = getFromLocalStorage()
//     getTodoLists.push(todoListItem)
//     localStorage.setItem("todolists",JSON.stringify(getTodoLists))

// }

const addTodoList = document.getElementById("addTodoList");
const todoLists = document.getElementById("todoLists");
// Function to save data to local storage
function saveToLocalStorage(list) {
    const date = new Date();
    const todoListItem = {
        title: list,
        timeCreated: date.toLocaleString(),
    };
    const getTodoLists = getFromLocalStorage();
    getTodoLists.push(todoListItem);
    localStorage.setItem("todolists", JSON.stringify(getTodoLists));
}

// Function to retrieve data from local storage
function getFromLocalStorage() {
    let todolists;
    if (localStorage.getItem("todolists") === null) {
        todolists = [];
    } else {
        todolists = JSON.parse(localStorage.getItem("todolists"));
    }
    return todolists;
}

// Function to add a new item to the todo list and save it to local storage
function addNewItem() {
    const value = addTodoList.value.trim();
    if (value !== "") {
        saveToLocalStorage(value);
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="#">${value}</a>`;
        todoLists.appendChild(listItem);
        addTodoList.value = "";
    }
}

// Event listener for adding new items to the todo list
addTodoList.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addNewItem();
    }
});

// Display the saved todo list items when the page loads
document.addEventListener("DOMContentLoaded", () => {
    const todolistsItemsFromLocalStorage = getFromLocalStorage();
    todolistsItemsFromLocalStorage.forEach((list) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="#">${list.title}</a>`;
        todoLists.appendChild(listItem);
    });
});
const alldata = getFromLocalStorage()
// const timestamp = alldata[0].timeCreated
// const commaIndex = timestamp.indexOf(",")
// const dateAndTime = timestamp.substring(0,commaIndex)
// console.log(dateAndTime)
const userCardTemplate = document.querySelector("[data-user-template]");
const dataContainer = document.querySelector("[data-container]");

alldata.forEach((list) => {
    const card = userCardTemplate.content.cloneNode(true).querySelector(".card");
    const title = card.querySelector("[data-title]");
    const timeCreated = card.querySelector("[data-timeCreated]");

    title.textContent = list.title;
    timeCreated.textContent = list.timeCreated;
    dataContainer.append(card);
});
