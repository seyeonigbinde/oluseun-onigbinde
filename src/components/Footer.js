import React from 'react'
import logo from '../images/logo.jpeg'


const Footer = () => {


    return (
        <footer>
            <section className="footer_container">
                <div className="footer_items" >
                <img src={logo} alt="logo"/>
                    <div className="footer_socials">
                        <a href ="https://www.facebook.com/"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://www.twitter.com/seunonigbinde/"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/oluseunonigbinde/"><i class="fab fa-linkedin"></i></a>
                        <a href="mailto:oluseun@yourbudgit.com"><i class="fas fa-envelope-square"></i></a>
                    </div>
                </div>
                <div className="footer_items" >
                    <h4>Useful Links</h4>
                    <a href="https://yourbudgit.com/">BudgIT</a>
                    <a href="https://tracka.ng/">Tracka</a>
                    <a href="https://kwerty.io/">Kwerty</a>
                    <a href="https://civichive.org/">Civic Hive</a>
                </div>
                <div className="footer_items" >
                    <h4>Resources</h4>

                    <a href="https://govspend.ng/">GovSpend.ng</a>
                    <a href="http://fixouroil.com/">Extractives</a>
                    <a href="http://openalliance.ng/">Institutional Support</a>
                    <a href="#1">Proximity Trust Foundation</a>

                </div>
                <div className="footer_items" >
                    <h3> </h3>
                    <p> </p>
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
