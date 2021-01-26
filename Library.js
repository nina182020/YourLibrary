    //setup for library books
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return [title, author, pages, read];
    };
};
const test = new Book("The Book Thief", "Markus Zusak", "584", "read");
const example2 = new Book("Harry Potter and the Philosophers Stone", "J.K.Rowling","223","Read");

const myLibrary = [test.info(), example2.info()];
localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
let values = JSON.parse(localStorage.getItem('myLibrary'));


     //add another book to myLibrary
const container = document.getElementById("container");
function createDiv() {
    const createDiv = document.createElement("div");
    container.appendChild(createDiv);
    createDiv.classList.add("new-book");
}
let ii = 0;
function newBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").value;
    if (ii <= 100) { 
        ii++;
        window['book' + ii] = new Book(title, author, pages, read);
        myLibrary.push(window['book' + ii].info());
    };
    createDiv();
    updateValues();
    addbook();
};
function updateValues() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    values = JSON.parse(localStorage.getItem('myLibrary'));
    bookCount = document.querySelectorAll('.new-book').length;
    x = document.querySelectorAll(".new-book");
};
let x = document.querySelectorAll(".new-book");
let bookCount = document.querySelectorAll('.new-book').length;
let i;
function addbook() {for (i = 0; i < bookCount; i++) {
    x[i].innerHTML = myLibrary[i];
    };
};
window.addEventListener('load', addbook());


    //change theme
function theme(bgColor, textColor) {
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
}  
let mode = 0;
function updateTheme() {
    if (mode == 0) {
        theme('rgb(31, 30, 39)', 'white');
        container.style.backgroundColor = '#102a43';
        container.style.boxShadow = '0px 0px 20px 20px #334e68';
        mode = 1; 
        return mode;
    } else {
        theme('white', 'black');
        container.style.backgroundColor = null;
        container.style.boxShadow = null;
        mode = 0;
        return mode;
    };
};