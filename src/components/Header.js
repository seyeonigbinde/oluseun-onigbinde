import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../images/logo1.jpeg'

const Header = () => {



    return (
        <header>
            <div className="logo">
                <Link to="/"><img src={logo1} alt="logo" /></Link>
            </div>
                <nav className="responsive_nav">
                    <div className="dropdown">
                        <i className="fas fa-bars fa-2x"></i>
                        <div className="dropdown-content">
                            <Link to="/">Home</Link>
                            <Link to="/about">My Story</Link>
                            <Link to="/initiatives">Initiatives</Link>
                            <Link to="/blog">Blog</Link>
                            <Link to="/publication">Publications</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>
                </nav>
            <nav className="desktop_nav">
                <Link to="/">Home</Link>
                <Link to="/about">My Story</Link>
                <Link to="/initiatives">Initiatives</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/publication">Publications</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    )
}
export default Header
