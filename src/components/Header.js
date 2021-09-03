import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpeg'

const Header = () => {



    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <a href="#1">Blog</a>
                <a href="#1">Contact</a>
                <a href="#1">The Existential Questions</a>
            </nav>
        </header>
    )
}
export default Header
