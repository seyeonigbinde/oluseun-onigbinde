import React from 'react'
import Footer from './Footer'
import Header from './Header'
import book1 from '../images/book1.jpeg'

const Publication = () => {


    return (
        <section>
            <Header/>
            <section className="pub_container">
                <a href="https://www.amazon.com/Existential-Questions-Uncomfortable-confronting-Nigeria/dp/9789848579/ref=sr_1_1?crid=1UVRKOW3IU12L&dchild=1&keywords=existential+questions&qid=1630672687&sprefix=the+existential+ques%2Caps%2C490&sr=8-1"><img src={book1} alt="book"/></a>
            </section>
            <Footer/>
        </section>
    )
}
export default Publication
