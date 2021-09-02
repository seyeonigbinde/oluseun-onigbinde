import React from 'react'
import Header from './Header'
import home_img from '../images/home_img.jpeg'
import { Link } from 'react-router-dom'

const Homepage = () => {



    return (
        <section>
            <Header />
            <section className="banner">
                <figure className="banner_img">
                    <img src={home_img} alt="home_image" />
                </figure>
                <div className="banner_text">
                    <h1>Oluseun Onigbinde</h1>
                    <p>Co-founder, BudgIT & Chief Executive, Kwerty</p><br/>
                    <h4>"Olúwa ló pin, kí se agbára" Ayinla Omowura </h4>
                </div>
            </section>
            <section className="home_about">
                <h2>My Profile</h2>
                <h5>Oluseun Onigbinde was born on September 18, 1985, in Osogbo, Osun State. He is from Ile Asipa, Masifa, Ogbomoso. Oluseun Onigbinde previously worked as Strategy Officer at First Bank of Nigeria. Oluseun Onigbinde is a member of the ONE Africa Policy Advisory Board and also chairs Citizens' Gavel  Advisory Board. 

                He is a member of Covenant Nation and Christ Apostolic Church, Agbala Itura, Ibadan. He is a member of Ikeja Dynamic Lions Club.  

                Oluseun Onigbinde runs The Proximity Trust, a revolving fund with a focus on being proximate to his roots and communities. He has worked to rebuild a computer lab for his alma mater, Loyola College & also provides scholarship awards for youths in Christ Apostolic Church, Agbala Itura, Ibadan, since 2019. </h5>
                <Link>Read More</Link>
            </section>
            <section className="comments_container">
            <h2>Recommendations </h2>
            <section className="comments">
                <div className="comments_card">
                <h4>"He has worked to rebuild a computer lab for his alma mater, Loyola College & also provides scholarship awards for youths in Christ Apostolic Church, Agbala Itura, Ibadan, since 2019."</h4><br/>
                <p>- Oby Ezekwesili</p>
                </div>
                <div className="comments_card">
                <h4>"He has worked to rebuild a computer lab for his alma mater, Loyola College & also provides scholarship awards for youths in Christ Apostolic Church, Agbala Itura, Ibadan, since 2019."</h4><br/>
                <p>- Oby Ezekwesili</p>
                </div>
                <div className="comments_card">
                <h4>"He has worked to rebuild a computer lab for his alma mater, Loyola College & also provides scholarship awards for youths in Christ Apostolic Church, Agbala Itura, Ibadan, since 2019."</h4><br/>
                <p>- Oby Ezekwesili</p>
                </div>
                <div className="comments_card">
                <h4>He has worked to rebuild a computer lab for his alma mater, Loyola College & also provides scholarship awards for youths in Christ Apostolic Church, Agbala Itura, Ibadan, since 2019.</h4><br/>
                <p>- Oby Ezekwesili</p>
                </div>  
            </section>
            </section>
        </section>
    )
}
export default Homepage
