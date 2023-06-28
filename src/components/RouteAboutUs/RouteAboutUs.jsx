import React from 'react'
import "./routeAboutUs.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


const RouteAboutUs = () => {
    return (
        <div className='routeAboutUs'>
            {/* HERO ABOUT US */}
            <div className="heroaboutUs p-5 bg-image">
                <div className="container">
                    <div className="d-flex justify-content-end h-100">
                        <div className="heroAboutUsText">
                            <h1>Our Story</h1>
                            <p><strong>Our work began</strong> in the <strong>Flora Tristán English School in 2008</strong>. Wishing to have a <strong>larger impact in the community</strong>, a group that included school staff and volunteers established HOOP as a registered Peruvian non-profit organization in 2012. Our five co-founders shared a vision for the organization that would help ensure its work in the community would be meaningful, ethical and long-lasting.HOOP has continued to grow ever since. <br />                                               As well as our programs, workshops and assessment for the development of our participants.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* OUR MISION/VISON/ -OUR VALUES */}
            <section id="ourValues" className="container our" >
                <div className="row misionVision">
                    <div className=" col-12 col-md-6">
                        <div className="icon-title">
                            <img className="icon1" src="/images/vision_icon1.svg" alt="" />
                            <div className="title">
                                <h2>Our mision</h2>
                            </div>
                        </div>
                        <div className="pAbout">
                            <p> <strong>To  promote the comprehensive development of individuals and their families through education.</strong>
                                We understand education as the promotion of knowledge through workshops, the development of skills and academic complementarity to improve people’s abilities.</p>
                        </div>
                    </div>
                    <div className=" col-12 col-md-6">
                        <div className="icon-title">
                            <img src="/images/vision_icon2.svg" alt="" />
                            <div className="title">
                                <h2>Our vision</h2>
                            </div>
                        </div>
                        <div className="pAbout">
                            <p>
                                <strong>Families transforming communities.</strong> <br />
                                Our goal is to provide people with the necessary tools for them to become the change agents within their own community and generate their own development.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="row values">
                    <h2>Our values</h2>
                    <div className="col-12 col-md-4">
                        <h3>Collaboration</h3>
                        <p>We constantly work towards building a cooperative environment where respect, tolerance and kindness prevail.</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <h3>Trust</h3>
                        <p>We maintain a close relationship with our collaborators and participants based on transparency and communication.</p>
                    </div>
                    <div className="col-12 col-md-4">
                        <h3>Dynamism</h3>
                        <p>
                            Our work is constantly adapting to changes; generating a creative, dedicated and flexible environment.
                        </p>

                    </div>
                </div>
            </section>

            {/* TESTIMONY */}
            <section id="testimony" className="row testimony">
                <h2>Comunity testimony</h2>
                <div className="conTestimony">


                    <Card className="cardAbout">
                        <div className="imgAbout">
                            <img src="./images/aboutUs/testimony1.jpg" alt="" />
                        </div>
                        <CardContent className="cardContent">
                            <h3>
                                Life stories
                            </h3>
                            <img src="./images/aboutUs/stars.png" alt="" />
                            <hr />
                            <div className="descriptionCard" >
                                <h4>
                                    Testimony señora <br /> ceferina:
                                </h4>
                                <p>
                                    I am in HOOP; because they help us with English classes and also other support with the moms, for example for me, I participate in the knitting activity and we became a team
                                </p>
                            </div>

                        </CardContent>
                    </Card>

                    <Card className="cardAbout">
                        <div className="imgAbout2">
                            <img src="./images/aboutUs/testimony2.jpg" alt="" />
                        </div>
                        <CardContent className="cardContent2">
                            <h3>
                                Life stories
                            </h3>
                            <img src="./images/aboutUs/stars.png" alt="" />
                            <hr />
                            <div className="descriptionCard" >
                                <h4>
                                    Testimony señora <br /> ceferina:
                                </h4>
                                <p>
                                    I am in HOOP; because they help us with English classes and also other support with the moms, for example for me, I participate in the knitting activity and we became a team
                                </p>
                            </div>

                        </CardContent>
                    </Card>


                </div>
            </section>

            {/* OUR PURPOSE - OUR IMPACT */}
            <section id='ourPurpose' className="row purpose">
                <div className="col-12 col-md-6 contPurpose">
                    <h2>Our purpose</h2>
                    <p>From 2012 up until now, HOOP has supported more than 230 families. 120 students are receiving english and/or coding classes, the average attendance to the classes is 80%.</p>
                    <p>99 families are receiving psychological support by our mental health team made of 6 members.</p>
                    <p>Over the years, more than 400 volunteers, national & international, have helped us in our projects and we have launched 2 social companies enabling 25 to get trained in professional knitting and receive an additional income.</p>
                </div>
                <div className="col-12 col-md-6 imgPurpose">
                    <img src="./images/aboutUs/ourPurpose.jpg" alt="" />
                </div>

            </section>
            <section id='ourImpact' className="row impact">
                <div className="col-12 col-md-6 imgImpact">
                    <img src="./images/aboutUs/ourImpact.jpg" alt="" />
                </div>
                <div className="col-12 col-md-6 contImpact">
                    <h2>Our impact</h2>

                    <p>From 2012 up until now, HOOP has supported more than 230 families. 120 students are receiving english and/or coding classes, the average attendance to the classes is 80%.</p>

                    <p>99 families are receiving psychological support by our mental health team made of 6 members.</p>

                    <p>Over the years, more than 400 volunteers, national & international, have helped us in our projects and we have launched 2 social companies enabling 25 to get trained in professional knitting and receive an additional income.</p>
                </div>
            </section>

            {/* HOOP TEAM */}
            <h2>The Hoopteam</h2>
            <section id='team'>
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


            {/* HOOP INTERNATIONAL TEAM */}
            <section id='international'>
                <h2>Our international team</h2>
                <div className='container teamInter'>
                    <div className="international">
                        <img src="./images/aboutUs/international1.png" alt="" />
                    </div>
                    <div className="international">
                        <img src="./images/aboutUs/international2.png" alt="" />
                    </div>
                    <div className="international">
                        <img src="./images/aboutUs/international3.png" alt="" />
                    </div>
                    <div className="international">
                        <img src="./images/aboutUs/international4.png" alt="" />
                    </div>
                    <div className="international">
                        <img src="./images/aboutUs/international5.png" alt="" />
                    </div>
                    <div className="international">
                        <img src="./images/aboutUs/international6.png" alt="" />
                    </div>

                </div>
            </section>
        </div>
    )
}

export default RouteAboutUs