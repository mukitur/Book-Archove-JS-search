const loadBookArchive = () => {
    const getSearchInput = document.getElementById('get-search-input');
    const getInputValue = getSearchInput.value;
    //clear Field
    getSearchInput.value = '';
    //load Books from API
    const url = `https://openlibrary.org/search.json?q=${getInputValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBooks(data.docs))
}
//display Books search result
const displayBooks = books => {
    //wrong input check / empty input check /gurbase value check
    if (books.length === 0) {
        alert('OPPS... You Enter a Wrong search. please Enter a valid book Name');
    }

    //show search result Items
    const getSearchResultItem = document.getElementById('show-search-item');
    getSearchResultItem.textContent = '';
    const div = document.createElement('div');
    div.classList.add('col')
    div.innerHTML = `
        <div class="col">
            <div class="p-3 bg-light text-primary"><h5> Total Item Found: ${books.length}</h5></div>
        </div>
    `;
    getSearchResultItem.appendChild(div);

    const showBooksResult = document.getElementById('show-results');
    showBooksResult.textContent = '';
    //forEach Loop 
    books.forEach(book => {
        console.log(book);
        //get image cover_i
        const coveriURL = `<img width="100%" src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" >`;
        const defaultImage = `<img width="100%" src = "images/blank_image.png" >`;

        const booksDIV = document.createElement('booksDIV');
        booksDIV.classList.add('col');
        booksDIV.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <p class="img-fluid rounded-start ps-2, py-4 "> ${book.cover_i ? coveriURL : defaultImage}</p>
                    <h5 class="card-title">Book Name: ${book.title}</h5>
                    <p class="card-text"><span class="fw-bold">Author:</span> ${book.author_name ? book.author_name : 'NOT Available'}</p> 
                    <p class="card-text"><span class="fw-bold">Published Year:</span> ${book.first_publish_year ? book.first_publish_year : 'NOT Found'}</p> 
                    <p class="card-text"><span class="fw-bold">Publisher:</span> ${book.publisher ? book.publisher : 'NOT Available'}</p> 
                </div>
            </div>
        `;
        showBooksResult.appendChild(booksDIV);
    })
}

