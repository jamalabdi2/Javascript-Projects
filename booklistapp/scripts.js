//class boook
//UI class
//store class
class Book{
    constructor(title,author,isbn){
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

class UI{
    static displayBooks(){
        
        const books = Storage.getBooks()
        books.forEach((book) =>UI.addBookToList(book))
    }
    static addBookToList(book){
        const list = document.querySelector("#book-list")
        const row = document.createElement("tr")

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        ` 
        list.appendChild(row)

    }
    static deleteBook(el){
        if(el.classList.contains("delete")){
            el.parentElement.parentElement.remove()
        }
    }
    static clearFields(){
        document.querySelector("#title").value = ""
        document.querySelector("#author").value = ""
        document.querySelector("#isbn").value = ""
    }

    static showAlert(message,className){
        const div = document.createElement("div")
        div.className = `alert alert-${className}`
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector(".container")
        const form = document.querySelector("#book-form")
        container.insertBefore(div,form)

        //vanish in 3 seconds
        setTimeout(() =>document.querySelector('.alert').remove(),3000)
        
    }
}
//Store Class: Handles Storage
class Storage{
    static getBooks(){
        let allbooks;
        if(localStorage.getItem("allbooks")===null){
            allbooks = []
        }else{
            allbooks = JSON.parse(localStorage.getItem("allbooks"))
        }
        return allbooks
    }

    static addBook(book){
        //get all books
        //push another book
        //push the whole books to local storage
        const books = Storage.getBooks()
        books.push(book)
        localStorage.setItem('allbooks',JSON.stringify(books))
    }

    static removeBook(isbn){
        const books = Storage.getBooks()
        books.forEach((book,index) =>{
            if(book.isbn === isbn){
                books.splice(index,1)
            }
        })
        localStorage.setItem("allbooks",JSON.stringify(books))
    }


}
 
//event: Display Books
document.addEventListener("DOMContentLoaded",UI.displayBooks)
// event: Add book
document.querySelector("#book-form").addEventListener("submit",(e) =>{
    e.preventDefault()
    const title =   document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const isbn = document.querySelector("#isbn").value

    //validate the vaues
    if(title ==="" || author === "" || isbn ===""){
        UI.showAlert("please fill in all fields","danger")
    }else{
        //instanciate book
        const book = new Book(title,author,isbn)

        // Add Book to UI
        UI.addBookToList(book)

        //add book to the local storage
        Storage.addBook(book)
        //show success message
        UI.showAlert('Book Added','success')

        //clearfields
        UI.clearFields()

    }
    
    
})

document.querySelector("#book-list").addEventListener("click",(e) =>{
    //remove book from ui
    UI.deleteBook(e.target)

    //remove book from localstorage
    Storage.removeBook((e.target.parentElement.previousElementSibling.textContent))


    UI.showAlert("Book Removed","success")

})



