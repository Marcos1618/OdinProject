const myLibrary = [];

function Book(title, author, read = false){
    this.title = title
    this.author = author
    this.read = read
}

Book.prototype.toggleRead = function(){
    this.read = !this.read;
}

export function addBookToLibrary(title, author){
    myLibrary.push(new Book(title, author));
    displayLibrary(myLibrary);
    console.log(`Book added to library: ${title} by ${author}`);
}

//  function displayBook()

export function displayLibrary(library){
    const tableBody = document.getElementById("libraryTableBody");

    tableBody.innerHTML = "";

    library.forEach((book, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${index+1}</td>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.read ? "Read ✅" : "Not Read ❌"}</td>
        <td>
            <button class="toggle-read" data-index="${index}">Toggle Read</button>
            <button class="remove-book" data-index="${index}">Remove</button>
        </td>
        `;
        tableBody.appendChild(row);
    });

    document.querySelectorAll(".remove-book").forEach((button) => {
        button.addEventListener("click", (e) => {
            removeBook(e.target.dataset.index);
        })
    })
    
    document.querySelectorAll(".toggle-read").forEach((button) => {
        button.addEventListener("click", (e) => {
            const bookIndex = e.target.dataset.index;
            myLibrary[bookIndex].toggleRead();
            displayLibrary(myLibrary);
        })
    })
}

export function removeBook(index){
    myLibrary.splice(index, 1);
    displayLibrary(myLibrary);
}

addBookToLibrary('Fish', 'Dr. Suess');
addBookToLibrary('Grinch', 'Dr. Suess');
addBookToLibrary('Horton', 'Dr. Suess');
addBookToLibrary('Eggs and Ham', 'Dr. Suess');
console.log(myLibrary);

document.addEventListener("DOMContentLoaded", () => displayLibrary(myLibrary));
