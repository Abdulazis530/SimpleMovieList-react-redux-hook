import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ location }) {

    return (
        <nav className="orange-navbar">
            <Link to="/" className="brand"> <h1>My Cinema</h1></Link>
            <ul>
                <li><Link to="/" className={`link ${location === "home" ? "tab-active" : ""}`}> Search Movie </Link></li>
                <li><Link to="/favorites" className={`link ${location === "favorites" ? "tab-active" : ""}`}> Favorite</Link></li>
            </ul>
        </nav>
    )
}
