/* MODAL FUNCTIONALITY */

// Get Modal
var modal = document.getElementById("modal");

// Get button that opens modal
var btn = document.getElementById("modal-button");

// Open modal when button is clicked
btn.onclick = function() {
    modal.style.display = "block";
}

// Exit modal when clicked outside of form
window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}



/* LIBRARY FUNCTIONALITY */

// Declare form and submit variables
form = document.getElementById('form');
submitButton = document.getElementById('submit');
bookGrid = document.getElementById('bookGrid');

// Declare library list of books
let myLibrary = []

// Create function when submit button is clicked to add Book
form.addEventListener('submit', (event) => {
    event.preventDefault();
    createBook()
});

// Create book object and add to library
function createBook() {
    title = document.getElementById('title').value;
    author = document.getElementById('author').value;
    pages = document.getElementById('pages').value;
    isRead = document.getElementById('isRead').checked;

    tempBook = new Book(title, author, pages, isRead);
    addBookToLibrary(tempBook);
}

// Create Book Object
function Book (title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// Push book into library and update DOM
function addBookToLibrary (book) {
    myLibrary.push(book);
    updateLibrary();
}

// Create DOM Elements and loop through books to add to library
function updateLibrary() {
    for (book of myLibrary) {
        let bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        let titleElem = document.createElement('p');
        let authorElem = document.createElement('p');
        let pagesElem = document.createElement('p');
        let isReadElem = document.createElement('p');

        titleElem.textContent = book.title;
        authorElem.textContent = book.author;
        pagesElem.textContent = book.pages;
        isReadElem.textContent = book.isRead;

        bookCard.appendChild(titleElem);
        bookCard.appendChild(authorElem);
        bookCard.appendChild(pagesElem);
        bookCard.appendChild(isReadElem);
        bookGrid.appendChild(bookCard);
    }
}









