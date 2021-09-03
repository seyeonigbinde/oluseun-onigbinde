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
                <h5>"Oluseun Onigbinde is so passionate and eloquent about what he does, coupled with diligence and well-thought-out plans to accomplished seemingly difficult task, in order to further stand the nation in good stead in its socioeconomic life!"</h5><br/>
                <p>- David Okunlola</p>
                <p>Program Officer (Population, Health and Nutrition) at Viable Knowledge Masters</p>
                </div>
                <div className="comments_card">
                <h5>"Calm, cool headed, highly self driven and intellectually sound. Looking for one person whose passion is seeing Citizens engage proactively with government on transparency and an open society, Oluseun is your man."</h5><br/>
                <p>- Olusola Amusan</p>
                <p>Co-Founder at Vesti</p>
                </div>
                <div className="comments_card">
                <h5>"Oluseun Onigbinde is a trail blazer in civic and social responsibilities. His work at BudgIT has open the eyes of millions of Nigerians on governance and public policy as it involves government spending. He has simplify the act of government budget that everyone both literate and illiterate can understand and have their inputs."</h5><br/>
                <p>- Calvin A Lawan</p>
                <p>COO at KF-Networks LTD</p>
                </div>
                <div className="comments_card">
                <h5>"Oluseun has the three core C's requisite for effective leadership, Character, Capacity and Competence. Working with him and the team at BudgIT (www.yourbudgit.com) on ONE Campaign's #DoAgric awareness project was a great learning and shaping experience."</h5><br/>
                <p>- Blossom Ozurumba</p>
                <p>Innovation Advisor to the Chief Innovation Officer at Nigerian National Petroleum Corporation</p>
                </div>  
            </section>
            </section>
            <Footer/>
        </section>
    )
}
export default Homepage
