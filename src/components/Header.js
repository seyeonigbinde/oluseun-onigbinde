import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpeg'

const Header = () => {



    return (
        <header>
            <div className="logo">
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
                <nav className="responsive_nav">
                    <div className="dropdown">
                        <i className="fas fa-bars fa-2x"></i>
                        <div className="dropdown-content">
                            <Link to="/">Home</Link>
                            <Link to="/about">About Me</Link>
                            <a href="#1">Blog</a>
                            <Link to="/publication">Publications</Link>
                            <a href="#1">Contact</a>
                        </div>
                    </div>
                </nav>
            <nav className="desktop_nav">
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <a href="#1">Blog</a>
                <Link to="/publication">Publications</Link>
                <a href="#1">Contact</a>
            </nav>
        </header>
    )
}
export default Header
