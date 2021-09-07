import React from 'react'
import logo1 from '../images/logo1.jpeg'


const Footer = () => {


    return (
        <footer>
            <section className="footer_container">
                <div className="footer_items" >
                <img src={logo1} alt="logo"/>
                </div>
                <div className="footer_items" >
                    <h3>Links</h3>
                    <a href="https://yourbudgit.com/">BudgIT</a>
                    <a href="https://tracka.ng/">Tracka</a>
                    <a href="https://kwerty.io/">Kwerty</a>
                    <a href="http://studio.fitila.africa/">Fitila</a>
                    <a href="https://civichive.org/">Civic Hive</a>
                    <a href="https://www.twitter.com/Proximity_OO/">Proximity Trust Foundation</a>

                </div>
                <div className="footer_items" >
                    <h3>Get In Touch</h3>
                <div className="footer_socials">
                        <a href ="https://www.facebook.com/"><i class="fab fa-facebook-f fa-2x"></i></a>
                        <a href="https://www.twitter.com/seunonigbinde/"><i class="fab fa-twitter fa-2x"></i></a>
                        <a href="https://www.instagram.com/gbainde"><i class="fab fa-instagram fa-2x"></i></a>
                        <a href="https://www.linkedin.com/in/oluseunonigbinde/"><i class="fab fa-linkedin fa-2x"></i></a>
                        <a href="mailto:oluseun@yourbudgit.com"><i class="fas fa-envelope-square fa-2x"></i></a>
                    </div>
                </div>
            </section>
            <hr />
            <section className="footer_copyright">
                <p>Copyright &copy; 2021 || Designed by <a href="https://seyeonigbinde.vercel.app/">Stevens Design Tech.</a></p>
            </section>
        </footer>
    )
}

export default Footer
