
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return [title, author, pages, read]
    }
}

const test = new Book('hello', 'world', 'hello', 'world');
const book2 = new Book('d','o','n','r');

const container = document.getElementById("container");
function newBook() {
    var createBook = document.createElement("div");
    container.appendChild(createBook);
    createBook.classList.add("new-book");
}

var myLibrary = [test.info(), book2.info()];
myLibrary.forEach(addBook => console.log(addBook));

var x = document.querySelectorAll(".new-book");
var bookCount = document.querySelectorAll('#container .new-book').length;
for (let i = 0; i < bookCount; i++){
    x[i].innerHTML = myLibrary[0];
}


function theme(bgColor, textColor){
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
}  
var mode = 0;
function updateTheme(){
    if (mode == 0) {
        theme('rgb(31, 30, 39)', 'white');
        container.style.backgroundColor = '#102a43';
        container.style.boxShadow = '0px 0px 20px 20px #334e68'
        mode = 1; 
        return mode;
    } else {
        theme('white', 'black');
        container.style.backgroundColor = null;
        container.style.boxShadow = null;
        mode = 0;
        return mode;
    }
}