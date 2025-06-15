const myLibrary = [];
const container = document.createElement("div");
container.classList.add("container");
const newButton = document.createElement("button");
newButton.classList.add("add-button");
newButton.innerText= "Add Book";

document.body.appendChild(newButton);
document.body.appendChild(container);

//Books Constructor function
function Book(title, author, pages, read){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
//Create book objects and add to the array
function addBookToLibrary(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}



//Add the books into the dom
function addToDom(){
    //Clears the container after each call
    container.innerHTML= "";
    for (let i = 0; i < myLibrary.length; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("pages");
        newDiv.textContent = JSON.stringify(myLibrary[i]);
        container.appendChild(newDiv);  
    }
}
addToDom();
//Add books to dom via a button
newButton.addEventListener("click", () =>{
    let titles = prompt("Enter the Title");
    let authors = prompt("Enter the Authors name");
    let page = prompt("How many pages does the book have?");
    let reads = prompt("Have you read this book: True or False");
    addBookToLibrary(titles, authors, page, reads);
    addToDom();
});
console.log(myLibrary.length);