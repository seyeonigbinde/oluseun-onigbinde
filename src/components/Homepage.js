import React from 'react'
import Header from './Header'
import home_img from '../images/home_img.jpeg'
import budgit from '../images/budgit.png'
import tracka from '../images/tracka.png'
import civic_hive from '../images/civic_hive.png'
import kwerty1 from '../images/kwerty1.jpeg'
import { Link } from 'react-router-dom'
import Footer from './Footer'

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
                    <quote>"Olúwa ló pin, kí se agbára" <p>- Ayinla Omowura</p> </quote>
                </div>
            </section>
            <section className="home_about">
                {/* <h2>My Profile</h2> */}
                <h5>Oluseun Onigbinde was born on September 18, 1985, in Osogbo, Osun State. He is from Ile Asipa, Masifa, Ogbomoso. Oluseun Onigbinde previously worked as Strategy Officer at First Bank of Nigeria. Oluseun Onigbinde is a member of the ONE Africa Policy Advisory Board and also chairs Citizens' Gavel  Advisory Board. 

                He is a member of Covenant Nation and Christ Apostolic Church, Agbala Itura, Ibadan. He is a member of Ikeja Dynamic Lions Club.  

                Oluseun Onigbinde runs The Proximity Trust, a revolving fund with a focus on being proximate to his roots and communities. He has worked to rebuild a computer lab for his alma mater, Loyola College & also provides scholarship awards for youths in Christ Apostolic Church, Agbala Itura, Ibadan, since 2019. </h5>
                <Link to="/about">Read More</Link>
            </section>
            <section className="company">
                <a href="https://yourbudgit.com/"><img src={budgit} alt="BudgIT"/></a>
                <a  href="https://tracka.ng/"><img src={tracka} alt="Tracka"/></a>
                <a href="https://civichive.org/"><img src={civic_hive} alt="CivicHive"/></a>
                <a  href="https://kwerty.io/"><img src={kwerty1} alt="Kwerty"/></a>
            </section>
            <section className="comments_container">
            {/* <h2>Recommendations </h2> */}
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
            <Footer/>
        </section>
    )
}
export default Homepage
