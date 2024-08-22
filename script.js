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

const suggestions = [
    new Book("Pride and Predjudice", "Jane Austin", "Regency", "328"),
    new Book("The Adventures of Sherlock Holmes", "Arthur Conan Doyle", "Detective", "307"),
    new Book("The Game Changer", "Lana Ferguson", "Romance", "400"),
    new Book("The Unraveling", "Vi Keeland", "Thriller", "304"),
]

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
     });
}

function displaySuggestions() {
    const suggestionsDiv = document.getElementById("suggestions");

    suggestions.forEach((book, index) => {
        const suggestionDiv = document.createElement("div");
        suggestionDiv.className = "suggestion";
        suggestionDiv.textContent = `${book.title} by ${book.author}`;
        suggestionDiv.addEventListener("click", () => {
            fillFormWithSuggestion(book);
        })
        suggestionsDiv.appendChild(suggestionDiv);
    });
}

function fillFormWithSuggestion(book) {
    document.getElementById("title").value = book.title;
    document.getElementById("author").value = book.author;
    document.getElementById("genre").value = book.genre;
    document.getElementById("pages").value = book.pages;
}

document.getElementById("showFormButton").addEventListener("click", function() {
    const form = document.getElementById("bookForm");
    if(form.style.display === "none" || form.style.display === "") {
        form.style.display = "flex";
    } else {
        form.style.display = "none";
    }
})

document.getElementById("addBookButton").addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const genre = document.getElementById("genre").value;
    const pages = document.getElementById("pages").value;

    if (title && author && genre) {
        addBookToLibrary(title, author, genre, pages,);
        document.getElementById("bookForm").reset();
        document.getElementById("bookForm").style.display = "none";
    } else {
        alert("Please fill out required fields.");
    }
});

displaySuggestions();