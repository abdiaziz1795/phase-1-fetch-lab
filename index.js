function fetchBooks() {
  // Fetch books from the API and return the promise
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json()) // Convert response to JSON
    .then(books => renderBooks(books)) // Pass JSON data to renderBooks
    .catch(error => console.error("Error fetching books:", error)); // Handle errors
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
