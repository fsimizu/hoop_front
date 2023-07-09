import React from 'react'
import "./ourTeam.css"

const OurTeam = () => {
  return (
    <>
 <section id='team'>            
            <h2 className='section__header'>The Hoopteam</h2>
                <div className="team">
                    <div className="member">
                        <img src="./images/aboutUs/member1.png" alt="" />
                        <h4>Yves Trionnaire</h4>
                        <h5>Director</h5>
                    </div>
                    <div className="member">
                        <img src="./images/aboutUs/member2.png" alt="" />
                        <h4>Cristabel Farronay </h4>
                        <h5>Education coordinator</h5>
                    </div>
                    <div className="member">
                        <img src="./images/aboutUs/member3.png" alt="" />
                        <h4>Marina Lobato</h4>
                        <h5>Community coordinator</h5>
                    </div>
                    <div className="member">
                        <img src="./images/aboutUs/member4.png" alt="" />
                        <h4>Lucia Cardenas</h4>
                        <h5>Family Coordinator</h5>
                    </div>
                </div>
                <div className="team">
                    <div className="member">
                        <img src="./images/aboutUs/member5.png" alt="" />
                        <h4>Anthony Urquizo </h4>
                        <h5>Flora Circular Coordinator</h5>
                    </div>
                    <div className="member">
                        <img src="./images/aboutUs/member6.png" alt="" />
                        <h4>Elena Urday</h4>
                        <h5>HR Director</h5>
                    </div>
                    <div className="member">
                        <img src="./images/aboutUs/member7.png" alt="" />
                        <h4>Camila Guzmán</h4>
                        <h5>Directora de comunicacion</h5>
                    </div>
                    <div className="member">
                        <img src="./images/aboutUs/member8.png" alt="" />
                        <h4>Wileny Cardenas</h4>
                        <h5>Legal Assistant</h5>
                    </div>
                </div>
            </section>

            <section id='international'>
                <h2 className='section__header'>Our international team</h2>
                <div className='container teamInter'>
                    <div className="international">
                        <img src="./images/aboutUs/international1.png" alt="" />
                        <h5>HOOP US</h5>
                    </div>
                    <div className="international">
                        <img src="./images/aboutUs/international2.png" alt="" />
                        <h5>HOOP US</h5>
                    </div>
                    <div className="international">
                        <img src="./images/aboutUs/international3.png" alt="" />
                        <h5>HOOP US</h5>
                    </div>
                    <div className="international">
                        <img src="./images/aboutUs/international4.png" alt="" />
                        <h5>HOOP US</h5>
                    </div>
                    <div className="international">
                        <img src="./images/aboutUs/international5.png" alt="" />
                        <h5>HOOP US</h5>
                    </div>
                    <div className="international">
                        <img src="./images/aboutUs/international6.png" alt="" />
                        <h5>HOOP US</h5>
                    </div>
                    <p className="text-main">If you want  to join the international HOOP team, please write us at info@hoop.ngo</p>

                </div>
            </section>
    </>
  )
}

export default OurTeam