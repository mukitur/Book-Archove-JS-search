const loadBookArchive = () => {
    const getSearchInput = document.getElementById('get-search-input');
    const getInputValue = getSearchInput.value;
    //clear Field
    getSearchInput.value = '';

    //load Books from API
    const url = `http://openlibrary.org/search.json?q=${getInputValue}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayBooks(data.docs))
}
//display Books search result
const displayBooks = books => {
    const data = books[0];
    console.log(books);
    const showBooksResult = document.getElementById('show-results');
    for (const book of books) {
        const booksDIV = document.createElement('booksDIV');
        booksDIV.classList.add('col');
        booksDIV.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    
                    <h5 class="card-title">Book Name: ${book.title}</h5>
                    <p class="card-text"><span class="fw-bold">Author:</span> ${book.author_name}</p> 
                    <p class="card-text"><span class="fw-bold">Published Year:</span> ${book.publish_date}</p> 
                    <p class="card-text"><span class="fw-bold">Publisher:</span> ${book.publisher}</p> 
                </div>
            </div>
        `;
        showBooksResult.appendChild(booksDIV);
    }
}

