import React from 'react'
import Header from './Header'
import contact from '../images/contact.jpeg'
import Footer from './Footer'

const Contact = () => {



    return (
        <section>
            <Header />
            <section className="contact_container">
                <div className="contact_img">
                    <img src={contact} alt="contact_image" />
                </div>
                <div className="contact_text">
                    <h1><b>Get in Touch</b></h1>
                    <div className="contact_socials">
                        <a href="https://www.facebook.com/"><i class="fab fa-facebook-f fa-2x"></i></a>
                        <a href="https://www.twitter.com/seunonigbinde/"><i class="fab fa-twitter fa-2x"></i></a>
                        <a href="https://www.instagram.com/"><i class="fab fa-instagram fa-2x"></i></a>
                        <a href="https://www.linkedin.com/in/oluseunonigbinde/"><i class="fab fa-linkedin fa-2x"></i></a>
                        <a href="mailto:oluseun@yourbudgit.com"><i class="fas fa-envelope-square fa-2x"></i></a>
                    </div>
                </div>
            </section>
            <Footer />
        </section>
    )
}
export default Contact
