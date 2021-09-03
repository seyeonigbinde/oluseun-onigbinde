import React from 'react'
import { Link } from "react-router-dom"


const Footer = () => {


    return (
        <footer>
            <section className="footer_container">
                <div className="footer_items" >
                    <h1><b> Oluseun </b></h1>
                    <div className="footer_socials">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-youtube"></i>
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
                    <Link>Other</Link>
                    <Link>Other</Link>
                    <Link>Others</Link>

                </div>
                <div className="footer_items" >
                    <h3>About </h3>
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
