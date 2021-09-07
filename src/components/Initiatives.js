import React from 'react'
import budgit from '../images/budgit.png'
import tracka from '../images/tracka.png'
import civic_hive from '../images/civic_hive.png'
import kwerty1 from '../images/kwerty1.jpeg'
import fitila1 from '../images/fitila1.png'
import proximity from '../images/proximity.jpeg'
import Header from './Header'
import Footer from './Footer'

const Initiatives = () => {



    return (
        <section>
            <Header />
            <section className="init_container">
                <div className="init_items" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000">
                    <img className="init_img" src={budgit} alt="BudgIT" />
                    <div>
                        <p>
                            Founded in 2011, BudgIT is a civic organization that applies technology to intersect citizen engagement with institutional improvement, to facilitate societal change. A pioneer in the field of social advocacy melded with technology, BudgIT uses an array of tech tools to simplify the budget and matters of public spending for citizens, with the primary aim of raising standard of transparency and accountability in government. We are in constant partnership with civil society, public institutions and the media, chiefly in the areas of fiscal analyses, civic technology and data representation.
                    </p>
                    </div>
                </div>
                <div className="init_items" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000">
                    <img className="init_img" src={tracka} alt="Tracka" />
                    <div>
                        <p>
                            Tracka was established by BudgIT in July 2014 to address critical issues surrounding social and economic development in Nigeria, specifically the lack of citizens inclusion in developmental projects, an ever-increasing number of abandoned projects and poor execution of the few projects implemented. From July 2014 till date, from one community, one project at a time, Tracka’s influence is spreading through our focus communities. We have a presence in 586 local government areas across 26 states in Nigeria. We have tracked over 15,859 projects in 7,589 towns and organised over 7,612 town hall meetings across the country. With increasing appeal for this project, we plan to scale to all the 36 states of the federation.
                    </p>
                    </div>
                </div>
                <div className="init_items" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000">
                    <img className="init_img" src={civic_hive} alt="Civic Hive" />
                    <div>
                        <p>
                            CivicHive was created to address the following social need: How does someone so mad about creating a change in the society get started? Why can’t there be a school for those whose passion is to build new and effective social interventions? Why can’t the same tools, techniques and technologies that have been used to build the most profitable products and services across the world, be used to build the most impactful social interventions?
                    </p>
                    </div>
                </div>
                <div className="init_items" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
                    <img className="init_img" src={fitila1} alt="Fitila" />
                    <div>
                        <p>
                            What drives us and motivates us daily at Fitila, is our passion to help businesses communicate better with their target audience. Research has shown that no matter how great the goods or services a business offers, how they communicate with their target audience will to a very large extent, determine how successful they will be. It has also been said that success in this century will rely heavily on our ability to leverage the data at our disposal as well as communicate appropriately with our target audience.</p><br />
                    </div>
                </div>
                <div className="init_items" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
                    <img className="init_img" src={kwerty1} alt="Kwerty" />
                    <div>

                        <p>Kwerty is building the world’s largest public data engine, layered with artificial intelligence, thereby enabling improved user experiences and actionable analysis. The platform leverages on multiple global open datasets and uses a clean interactive view to improve decision making. Users also get algorithm-based analytics of charts and the platform will also feature country dashboards, intuitive correlations between charts - all based on the robust database - thereby providing insights to users. Kwerty has offices in Lagos and Washington D.C.
                    </p>
                    </div>
                </div>
                <div className="init_items" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000">
                    <img className="init_img" src={proximity} alt="Proximity" />
                    <div>
                        <p>
                        Proximity Trust is a revolving fund with a focus on being proximate to his roots and communities. The ideas & works of Oluseun Onigbinde & his family, with focus on being proximate to their roots & communities. Ogbomosho, Nigeria.
                    </p>
                    </div>
                </div>
            </section>
            <Footer />
        </section>
    )
}
export default Initiatives
