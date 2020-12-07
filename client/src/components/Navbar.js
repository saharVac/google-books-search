import React from "react"
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
    const location = useLocation

    return (
        <nav>
            <ul className="navlinks">
                <li className="link">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Search Books</Link>
                </li>
                <li className="link">
                    <Link to="/saved" className={location.pathname === "/saved" ? "nav-link active" : "nav-link"}>Saved Books</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar 
