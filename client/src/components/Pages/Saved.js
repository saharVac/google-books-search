import React, { useState, useEffect } from "react"
import axios from "axios"
import Book from "../Book"

function Saved() {

    const [favorites, setFavorites] = useState({
        books: []
    })

    useEffect(() => {
        // Store favorite books from DB in the state
        axios.get("/api/books")
            .then(res => {
                setFavorites({ ...favorites, books: res.data})
            })
            .catch(err => console.log())
        // Render favorite books onto the page

    })

    function removeBook(id) {
        // Remove book from database
        axios.delete("/api/books/" + id)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log())
        console.log(id)
    }

    return (
        <div>
            <h1>Saved Books</h1>
            <hr />
            <div id="saved-books">
                {   
                    favorites.books.map(book => {
                        return (
                            <Book 
                                title={book.title} 
                                authors={book.authors}
                                thumbnail={book.image}
                                description={book.description}
                                link={book.link}
                                saved="true"
                                onDelete={() => removeBook(book._id)}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Saved