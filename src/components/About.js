import React from 'react'
import {Link} from 'react-router-dom'
import Header from './Header'
import oluseun1 from '../images/oluseun1.jpeg'
import oluseun2 from '../images/oluseun2.jpeg'
import oluseun3 from '../images/oluseun3.jpeg'
import oluseun4 from '../images/oluseun4.jpeg'
import oluseun5 from '../images/oluseun5.jpeg'
import Footer from './Footer'

const About = () => {



    return (
        <section>
            <Header />
            <section className="about_container1">
                <div className="about_img">
                    <img src={oluseun1} alt="image1" />
                </div>
                <div className="about_text">
                    <h2>Background</h2>
                    <p>Oluseun Onigbinde is a native of Masifa, Ogbomoso, Oyo State. He was born in Osogbo, presently Osun State, Nigeria. He had his primary and secondary school education in Ibadan. He attended the prestigious Loyola College, Ibadan where he excelled in the sciences. He scored nine distinctions in his West African Examinations Council's exam, earning the best result of the school's 2001 set. Oluseun attended the University of Agriculture, Abeokuta where he obtained a bachelor of engineering (B.Eng.) in Electrical/Electronics Engineering During his NYSC, he was posted to Benin City where he got a job at Access Bank. He later joined First Bank for a period of three and half years.</p><br />
                    <p>
                        He also attended the Stanford University Graduate School of Business where he completed the executive program in Social Entrepreneurship. He is a member of Covenant Nation and Christ Apostolic Church, Agbala Itura, Ibadan. He is a member of Ikeja Dynamic Lions Club. He recently published his first book titled <Link to="/publication">"The Existential Questions"</Link> which was forwarded by Dr Obiageli Ezekwesili.
                    </p><br/>
                    <p>Oluseun is happily married to his wife, Oluwaseun and blessed with daughters - Wuraola, Ireoluwa and Elizabeth</p>
                </div>
            </section>
            <section className="about_container"data-aos="fade-down" data-aos-duration="2000">
            <div className="about_img1">
                    <img src={oluseun3} alt="image2" />
                </div>
                <div className="about_text1">
                    <h2>The Civic Space</h2>
                    <p>In 2011, Oluseun Onigbinde and Joseph Agunbiade formed a team during a hackathon held at the Co-Creation Hub. It was here that he came up with the idea for a need to publicize government spending to the general public, leading to the startup BudgIT. Oluseun has always been a big believer in data-driven journalism and participated a health journalism project as part of the Knight Innovation Fellowship of the International Center for Journalists. In 2014, BudgIT launched Tracka, a project tracking tool. Tracka monitors public projects in over 600 communities in Nigeria. His organization also founded Civic Hive, Nigeria's civic innovation hub, that incubates solely civic tech start-ups.</p><br />
                    <p>His organization has reached over 12 million Nigerians and also support over 45 civil society organizations and public institutions such as NEITI, National Assembly, Nigerian Investment Promotion Commission and Kaduna State Government. Oluseun is a recipient of several international awards. </p>
                </div>
                <div className="about_img3">
                    <img src={oluseun3} alt="image2" />
                </div>
            </section>
            <section className="about_container2" data-aos="fade-down" data-aos-duration="2000">
                <div className="about_img">
                    <img src={oluseun4} alt="image1" />
                </div>
                <div className="about_text2">
                    <h2>Global Leader</h2>
                    <p>Oluseun Onigbinde has visited at least 28 countries expanding conversations on the need for accountability & inclusive civic engagement. He has contributed to over 40 BudgIT publications on issues of fiscal transparency, accountability, civic engagement, extractives reform and public sector reform. He has worked with the National Assembly on Cost of Governance reform committee and also briefly served as Technical Adviser to the Minister of State for Budget and National Assembly. </p> <br />


                    <p>He has made presentations at Chatham House, Bloomberg Media Innovators Africa (Naivasha & Dakar), Jesus House DC, This Present House, Covenant Nation's The Platform, Daystar’s Excellence in Leadership Conference, Open Government Partnership Summits (London, Paris & Ottawa), Skoll Foundation Summit (Oxford), Open Knowledge Conference (Helsinki & Berlin), African Philanthropy Forum and Transparency Camp. He's also TV analyst for Channels TV, CNBC Africa and TVC Nigeria. </p><br />

                    <p>His work has been profiled/mentioned by CNN, New York Times, The Guardian, Washington Post, London School of Economics, London Stock Exchange, Pan-Atlantic University, Bella Naija and 234Next. He served as a technical consultant to the Access NG/SL consortium, a project funded by the US State Department and he has also consulted for various DFID projects on fiscal transparency, extractive reform, data visualizations and civic engagement.  </p>
                </div>
            </section>
            <section className="about_container3"  data-aos="fade-down" data-aos-duration="2000">
            <div className="about_img2">
                    <img src={oluseun2} alt="image3" />
                </div>
                <div className="about_text3">
                    <h2>Recognitions</h2>
                    <p>He is a board member of the ONE Africa Policy Advisory Board and also chairs Citizens' Gavel  Advisory Board.  He was appointed as Technical Adviser at the Ministry of Budget and National Planning in 2019 but resigned few days after this appointment.</p><br/>

                    <p>Oluseun is a recipient of several awards and fellowships. In 2012, he was awarded the Future Awards Prize for Science and Tech Innovation. In 2018, Oluseun was selected by the Obama Foundation for its inaugural Obama Scholars Program at Columbia University. He has also been recognized as;</p> <br />
                    <div className="recognition_list">
                    <p><i class="fas fa-gem"></i> Africa's Top 50 Disruptor, The Africa Report</p>

                    <p><i class="fas fa-gem"></i> The UK International Leaders Programme Fellow</p>

                    <p><i class="fas fa-gem"></i> The French Government Prominent Persons Program Fellow </p>

                    <p><i class="fas fa-gem"></i> Obama Foundation Scholar, Columbia University </p>

                    <p><i class="fas fa-gem"></i> The New African Magazine Award for 100 Most Influential Africans </p>

                    <p><i class="fas fa-gem"></i> The Africa Report Award for 100 Most Influential Africans </p>

                    <p><i class="fas fa-gem"></i> Fiscal Commissioner, The Nigerian Economic Summit Group</p>

                    <p><i class="fas fa-gem"></i> Goalkeeper, Gates Foundation </p>

                    <p><i class="fas fa-gem"></i> Seras Award for Outstanding Leader</p>

                    <p><i class="fas fa-gem"></i> JCI TOYP Award</p>

                    <p><i class="fas fa-gem"></i> BMW Responsible Leaders Network Member </p>

                    <p><i class="fas fa-gem"></i> Archbishop Desmond Tutu Fellow</p>

                    <p><i class="fas fa-gem"></i> Melvin Jones Fellow of International Association of Lions Club </p>

                    <p><i class="fas fa-gem"></i> Bloomberg Media Initiative Africa Scholar </p>

                    <p><i class="fas fa-gem"></i> Quartz Africa 30 Innovators Award</p>

                    <p><i class="fas fa-gem"></i> Stanford Draper Hills Summer Fellow</p>

                    <p><i class="fas fa-gem"></i> Aspen New Voices Fellow </p>

                    <p><i class="fas fa-gem"></i> Harambean (Harambe Entrepreneur Alliance)</p>

                    <p><i class="fas fa-gem"></i> Knight Foundation Fellow at the International Center for Journalists </p>

                    <p><i class="fas fa-gem"></i> Ashoka Fellow</p>

                    <p><i class="fas fa-gem"></i> Past President, Ikeja Dynamic Lions Club</p>

                    <p><i class="fas fa-gem"></i> The Future Africa Prize Winner for Technology</p>
                    </div>
                </div>
                <div className="about_img4">
                    <img src={oluseun2} alt="image3" />
                </div>
            </section>
            <section className="about_container4" data-aos="fade-down" data-aos-duration="2000">
            <div className="about_img">
                    <img src={oluseun5} alt="image2" />
                </div>
                <div className="about_text4">
                    <h2>Charity</h2>
                    <p>Oluseun runs <b>The Proximity Trust</b>, a revolving fund with a focus on being proximate to his roots and communities. He has worked to rebuild a computer lab for his alma mater, Loyola College & also provides scholarship awards for youths in Christ Apostolic Church, Agbala Itura, Ibadan, since 2019.</p><br />
                    <p>Oluseun also renovated the Technical Workshop building of Loyola College, Ibadan, his alma mater.  He also provided desktop computers and other technical tools to aiding the learning process of the students. </p>
                </div>

            </section>
            <Footer />
        </section>
    )
}
export default About
