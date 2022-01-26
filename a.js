let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const form = document.querySelector('form')

const formTitle = document.querySelector('#title');
const formAuthor = document.querySelector('#author');
const formPages = document.querySelector('#pages');
const formRead = document.querySelector('#read');




function addBookToLibrary() {
}


function sayMyLibrary() {
    for (i = 0; i < myLibrary.length; i++) {
        const newPara = document.createElement('p')
        newPara.textContent = myLibrary[i]
        document.body.appendChild(newPara)
        
        const btnDelete = document.createElement('button')
        btnDelete.textContent = "X"
        newPara.appendChild(btnDelete)

        const btnRead = document.createElement('button')
        btnRead.textContent = "Toggle Read"
        newPara.appendChild(btnRead)
    }
}


let bookButton = document.getElementById("newBookButton")
bookButton.addEventListener("click", function() {
    const formShow = document.getElementById("bookForm")
    if (formShow.style.display === "none") {
        formShow.style.display = "block"
    } else {
        formShow.style.display = "none"
    }
})

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
}
Book.prototype.push = function() {
    myLibrary.push(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`)
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read")
console.log(theHobbit.info())
theHobbit.push();

form.addEventListener('submit', function() {
    const newBook = new Book(`${formTitle.value} by ${formAuthor.value}, ${formPages.value} pages, ${formRead.value}`)
    newBook.push();
})

sayMyLibrary();