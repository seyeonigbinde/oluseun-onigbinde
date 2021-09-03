import React from 'react'
import Footer from './Footer'
import Header from './Header'
import book1 from '../images/book1.jpeg'

const Publication = () => {


    return (
        <section>
            <Header/>
            <section className="pub_container">
                <img src={book1} alt="book"/>
            </section>
            <Footer/>
        </section>
    )
}
export default Publication
