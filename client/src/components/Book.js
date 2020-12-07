import React from "react"

const Book = ({ title, authors, thumbnail, description, link, saved, onFavorite, onDelete, id}) => {

    return (
        <div className="book-info">
            <h4>{title}</h4>
            <h5>Authors: {authors}</h5>
            <img alt="Thumbnail" src={thumbnail} />
            <p>
                {description}
            </p>
            <div className="buttons">
                <button className="view-button" onClick={() => window.open(`${link}`, '_blank')}>View</button>
                {
                    // if viewing in saved page, render delete button, else render save button
                    saved === "true" ?
                    <button onClick={() => onDelete(id)}>Delete</button> :
                    <button onClick={() => onFavorite(title, authors, thumbnail, description, link)}>Save</button>
                }
                
            </div>
            <hr />
        </div>
    )
}

export default Book
