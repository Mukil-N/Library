let myLibrary = [];
function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title,author,pages,read){
    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks(){
    const booksContainer = document.getElementById('books-container');
    booksContainer.innerHTML = '';

    myLibrary.forEach((book,index)=>{
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <p><strong>Title:</strong> ${book.title}</p>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Read:</strong> ${book.read ? 'Yes' : 'No'}</p>
            <button onclick="toggleRead(${index})" class="toggle">Toggle Read</button>
            <button onclick="removeBook(${index})"class="remove">Remove</button>`;

        booksContainer.appendChild(bookDiv);
    });
}

function toggleRead(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}
function removeBook(index){
    myLibrary.splice(index,1);
    displayBooks();
}
document.getElementById('add-book').addEventListener('click',()=>{
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    if(title && author && pages){
        addBookToLibrary(title,author,pages,read);
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('pages').value = '';
        document.getElementById('read').checked = false;

    }
});

displayBooks();