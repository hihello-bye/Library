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