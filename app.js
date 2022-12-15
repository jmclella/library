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
let myLibrary = [
    {
        title: 'The Hobbit',
        author: 'J.R.R Tolkien',
        pages: 295,
        isRead: true
    }
]

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

        let buttonContainer = document.createElement('div');
        buttonContainer.classList.add('card-button-container');

        let isReadButton = document.createElement('button');

        let removeCardButton = document.createElement('button');
        removeCardButton.classList.add('remove-card');

        titleElem.textContent = book.title;
        authorElem.textContent = book.author;
        pagesElem.textContent = `${book.pages} pages`;
        
        if (book.isRead) {
            isReadButton.textContent = 'Read';
            isReadButton.classList.add('read');
        } else {
            isReadButton.textContent = 'Not Read';
            isReadButton.classList.add('unread');
        }

        removeCardButton.textContent = 'Remove';

        bookCard.appendChild(titleElem);
        bookCard.appendChild(authorElem);
        bookCard.appendChild(pagesElem);
        
        buttonContainer.appendChild(isReadButton);
        buttonContainer.appendChild(removeCardButton);

        bookCard.appendChild(buttonContainer);

        bookGrid.appendChild(bookCard);
    }
}


updateLibrary();






