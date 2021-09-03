import React from 'react'
import { Link } from "react-router-dom"
import logo from '../images/logo.jpeg'


const Footer = () => {


    return (
        <footer>
            <section className="footer_container">
                <div className="footer_items" >
                <img src={logo} alt="logo"/>
                    <div className="footer_socials">
                        <Link><i class="fab fa-facebook-f"></i></Link>
                        <Link><i class="fab fa-twitter"></i></Link>
                        <Link><i class="fab fa-instagram"></i></Link>
                        <Link><i class="fab fa-youtube"></i></Link>
                    </div>
                </div>
                <div className="footer_items" >
                    <h4>Useful Links</h4>
                    <Link to=''>BudgIT</Link>
                    <Link>Tracka</Link>
                    <Link>Kwerty</Link>
                    <Link>Civic Hive</Link>
                </div>
                <div className="footer_items" >
                    <h4>Useful Links</h4>

                    <Link>Proximity Trust Foundation</Link>
                    <Link>Proximity Trust Foundation</Link>
                    <Link>Proximity Trust Foundation</Link>
                    <Link>Proximity Trust Foundation</Link>

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
