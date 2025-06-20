const myLibrary = [];
const container = document.createElement("div");
container.classList.add("container");

const newButton = document.createElement("button");
newButton.classList.add("add-button");
newButton.innerText= "Add Book";

//delete button
const deleteButton = document.createElement("button");
deleteButton.classList.add("delete-button");
deleteButton.innerText = "Remove a Book";

//button container
const btnContainer = document.createElement("div");
btnContainer.classList.add("btn-container");
btnContainer.appendChild(deleteButton);
btnContainer.appendChild(newButton);

document.body.appendChild(container);
document.body.appendChild(btnContainer);

//Books Constructor function
function Book(title, author, pages, read){
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.readStatus = function(){
     if(this.read === true){
        return this.read = false;
     }
     else{
        return this.read = true;
     }
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

        let readBtn = document.createElement("button");
        readBtn.innerHTML = "Toggle Read Status";

        const obj = myLibrary[i];
    
        readBtn.addEventListener("click" , () =>{
            console.log(obj.readStatus());
            addToDom();
        });
        container.appendChild(readBtn);

        newDiv.classList.add("pages");
        newDiv.innerHTML = `
        <p><strong>Title:</strong> ${obj.title}</p>
        <p><strong>Author:</strong> ${obj.author}</p>
        <p><strong>Pages:</strong> ${obj.pages}</p>
        <p><strong>Read:</strong> ${obj.read ? 'Yes' : 'No'}</p>`;
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

deleteButton.addEventListener("click", () =>{
    if(myLibrary.length === 0){
        alert("You need to add books before you can delete");
    }
    else{
        let delAuthor = prompt("Enter the Author of the book you want to delete. :");
        let delTitle = prompt("Enter the title of the book you want to delete. :");

        const newCon = document.createElement("div");

        let arrLength = myLibrary.length;
        for(let i = 0; i < arrLength; i++){
            const obj = myLibrary[i];
            if(obj.title === delTitle && obj.author === delAuthor){
                myLibrary.splice(i, 1);
                console.log(myLibrary);
                container.innerHTML = "";
                newCon.textContent = JSON.stringify(myLibrary);
                container.appendChild(newCon);

                
            }
        }

    }
  
});

console.log(myLibrary.length);