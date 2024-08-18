class Book {
    constructor(title, author, genre, pages) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pages = pages;
    }
    printSummary() {
        return `${this.title} by ${this.author} Genre: ${this.genre} Number of pages: ${this.pages}`;
    }
}

const library = [];

function addBookToLibrary(title, author, genre, pages) {
    const newBook = new Book(title, author, genre, pages);
    library.push(newBook);
    displayLibrary();
}

function displayLibrary() {
    const libraryDiv = document.getElementById("library");
    libraryDiv.innerHTML ="";

    library.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "book";
        bookDiv.textContent = `${index + 1}. ${book.printSummary()}`;
        libraryDiv.appendChild(bookDiv);
     )}
}