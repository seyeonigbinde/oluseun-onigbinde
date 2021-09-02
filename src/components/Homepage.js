import React from 'react'
import Header from './Header'
import home_img from '../images/home_img.jpeg'

const Homepage = () => {



    return (
        <section>
            <Header/>
            <section className="banner">
            <figure className="banner_img">
                    <img src={home_img} alt="home_image"/>
                </figure>
                <div className="banner_text">
                    <h4>"Olúwa ló pin, kí se agbára" Ayinla Omowura </h4>
                </div>
            </section>
        </section>
    )
}
export default Homepage
