import React, { useState } from "react"

function Search() {

    return (
            <form id="search-area">
                <h4>Search Book:</h4>
                <input id="search-book" />
                <button id="search">Search!</button>
            </form>
    )
}

export default Search