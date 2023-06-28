import "./routeOurWork.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RouteOurWork = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    };

    let settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,

                }
            }
        ]
    };

    return (
        <div>
            {/* HERO OUR WORK */}
            <div className="heroOurWork p-5 bg-image">
                <div className="container">
                    <div className="d-flex justify-content-end h-100">
                        <div className="heroOurWorkText">
                            <h1>Our work</h1>
                            <p><strong>Our work began</strong> in the <strong>Flora Tristán English School in 2008</strong>. Wishing to have a <strong>larger impact in the community</strong>, a group that included school staff and volunteers established HOOP as a registered Peruvian non-profit organization in 2012. Our five co-founders shared a vision for the organization that would help ensure its work in the community would be meaningful, ethical and long-lasting.HOOP has continued to grow ever since. <br />                                               As well as our programs, workshops and assessment for the development of our participants.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* OUR PROGRAMS */}
            <section id="ourPrograms" className='ourPrograms'>
                <h2>Our Programs</h2>
                <img className="section__underline" src="/images/underline.svg" alt="" />
                <div className="row program">
                    <div className="col-12 col-md-6 container">
                        <div>
                            <h3>Education</h3>
                            <p>We believe that education is the pillar to improving the lives of our community members, which is why we offer support for children, adolescents and adults. Helping the young ones overcome academic difficulties, and motivating the adults who haven’t concluded their education to do so through our alliance with CEBA Micaela Bastidas. Our multiple allies help us offer different types of options for our community, so they can see new ways to pursue their education and better their lives.</p>
                            <a href="">Learn more..</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 imgPrograms">
                        <div>
                            <img src="./images/ourWork/ourPrograms1.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row program">
                    <div className="col-12 col-md-6 imgPrograms2">
                        <div>
                            <img src="./images/ourWork/ourPrograms2.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 container">
                        <div>
                            <h3>Family</h3>
                            <p>This multidisciplinary program seeks not only the mental and emotional well-being of the community but also its physical health. Giving them access to preventative health programs, medical campaigns, and so on. Together with the psychological accompaniment, it offers workshops for each member of the families, seeking to promote integral health and their development as independent people.</p>
                            <a href="">Learn more..</a>
                        </div>
                    </div>
                </div>
                <div className="row program">
                    <div className="col-12 col-md-6 container">
                        <div>
                            <h3>Community</h3>
                            <p>To continue promoting the independent development of the community, and to push their own progress, we support them by giving them access to workshops in topics such as administration and generation of different products and services according to their abilities and talents. Thus fostering their autonomy and professional development. We also offer assistance in legal or medical emergencies, as well as the management of donations that enter through allied companies.</p>
                            <a href="">Learn more..</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 imgPrograms">
                        <div >
                            <img src="./images/ourWork/ourPrograms3.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* GOALS */}
            <section className='goalsHoop'>
                <h2>Hoop and the SDGS</h2>
                <h3>Goals for the year 2023</h3>
                <Slider {...settings2} >
                    <div className='sliderGoals'>
                        <div className='goalImg'>
                            <img src="./images/ourWork/carousel1.png" alt="" />
                        </div>
                        <div className='goalDesription'>
                            <h4>1. No poverty</h4>
                            <p>We’re constantly advising the families of the community regarding topics such as health and wellbeing, in order to improve their quality of life, reduce their vulnerabilities and increase to ongoing changes and risks.</p>
                        </div>
                    </div>
                    <div className='sliderGoals'>
                        <div className='goalImg'>
                            <img src="./images/ourWork/carousel1.png" alt="" />
                        </div>
                        <div className='goalDesription'>
                            <h4>1. No poverty</h4>
                            <p>We’re constantly advising the families of the community regarding topics such as health and wellbeing, in order to improve their quality of life, reduce their vulnerabilities and increase to ongoing changes and risks.</p>
                        </div>
                    </div>
                    <div className='sliderGoals'>
                        <div className='goalImg'>
                            <img src="./images/ourWork/carousel1.png" alt="" />
                        </div>
                        <div className='goalDesription'>
                            <h4>1. No poverty</h4>
                            <p>We’re constantly advising the families of the community regarding topics such as health and wellbeing, in order to improve their quality of life, reduce their vulnerabilities and increase to ongoing changes and risks.</p>
                        </div>
                    </div>
                    <div className='sliderGoals'>
                        <div className='goalImg'>
                            <img src="./images/ourWork/carousel1.png" alt="" />
                        </div>
                        <div className='goalDesription'>
                            <h4>1. No poverty</h4>
                            <p>We’re constantly advising the families of the community regarding topics such as health and wellbeing, in order to improve their quality of life, reduce their vulnerabilities and increase to ongoing changes and risks.</p>
                        </div>
                    </div>
                </Slider>

            </section>

            <section id='sponsors'>
                <div className='container sponsors'>
                    <h2> Become a sponsor</h2>
                    <img className="section__underline" src="/images/underline.svg" alt="" />
                    <Slider {...settings} >
                        <div className='slider'>
                            <img src="./images/ourWork/sponsor1.png" alt="" />
                        </div>
                        <div className='slider'>
                            <img src="./images/ourWork/sponsor2.png" alt="" />
                        </div>
                        <div className='slider'>
                            <img src="./images/ourWork/sponsor3.png" alt="" />
                        </div>
                        <div className='slider'>
                            <img src="./images/ourWork/sponsor4.png" alt="" />
                        </div>
                    </Slider>
                </div>
            </section>
        </div>
    )
}

export default RouteOurWork