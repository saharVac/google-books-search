import React, { useState } from "react"
import axios from "axios"
import Book from "../Book"

function Search() {

    const [formObject, setFormObject] = useState({
        title: "",
        results: []
    })

    function handleChange(event) {
        setFormObject({ ...formObject, title: event.target.value})
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
        const URL = BASEURL + formObject.title.split(' ').join('+')
        axios.get(URL)
            .then(res => setFormObject({ ...formObject, results: res.data.items}))
            .catch(err => console.log(err))
    }

    function addToFavorites(title, authors, thumbnail, description, link) {
        const newBook = {
            title: title,
            authors: authors,
            description: description,
            image: thumbnail,
            link: link,
        }
        // Add to Mongo DB
        axios.post("/api/books", newBook)
            .then(res => {
                alert(newBook.title +  " Added to favorites!")
                console.log(res)
            })
            .catch(err => console.log())
    }

    return (
        <div>
            <form id="search-area">
                <h4>Search Book:</h4>
                <input id="search-book" value={formObject.title} onChange={handleChange} />
                <button onClick={handleFormSubmit} id="search">Search!</button>
            </form>
            <div id="books">
                {
                    formObject.results.map(book => {
                        return (
                            <Book 
                                title={book.volumeInfo.title} 
                                authors={book.volumeInfo.authors}
                                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                                description={book.volumeInfo.description}
                                link={book.volumeInfo.previewLink}
                                onFavorite={addToFavorites}
                                saved="false"
                            />
                        )
                    })
                }
            </div>
        </div>
        
    )
}

export default Search