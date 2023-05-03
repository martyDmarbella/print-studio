import React from "react";
import jayson from "../assets/images/jayson.jpg"
import jaime from "../assets/images/jaime.jpg"
import marty from "../assets/images/marty.jpg"

const AboutUs = () => {
    return (
        <>
            <section className="section-white">
                <div className="container">
                    <div className="row">

                        <div className="col-md-12 text-center">
                            <h2>
                                The Team Behind Print Studio
                            </h2>
                            <p className="section-subtitle">
                                PrintStudio is a team of passionate and talented individuals dedicated to providing high-quality printing solutions to clients across various industries.
                            </p>
                        </div>

                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">

                                <img src={jayson} className="team-img" alt="pic" />
                                <h3>Jayson Herrera</h3>
                                <div className="team-info">
                                    <p>Leader Web Developer Print of Studio</p>
                                    <p>Jayson leader and web developer at PrintStudio. With over 10 years of experience in the printing and web development, Jayson is a highly skilled expert 
                                        who is passionate about delivering exceptional results to his clients.</p>

                                    <ul className="team-icon">

                                    <li><a href="#Soc" className="twitter">
                                        <i class="fa-brands fa-twitter fa-lg"></i>
                                    </a></li>
                                    <li><a href="#Soc" className="facebook">
                                        <i class="fa-brands fa-facebook fa-lg"></i>
                                    </a></li>
                                    <li><a href="#Soc" className="instagram">
                                        <i class="fa-brands fa-instagram fa-lg"></i>
                                    </a></li>

                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">

                                <img src={jaime} className="team-img" alt="pic" />
                                <h3>Jaime Mondares Yanoc</h3>
                                <div className="team-info">
                                    <p>Web Developer Graphic Design</p>
                                    <p>Jaime a talented web developer and graphic designer at PrintStudio. With over 10 years of experience in the industry, Jaime has a keen eye for design and a passion for creating beautiful, 
                                       functional websites that meet his clients' needs.</p>

                                    <ul className="team-icon">

                                    <li><a href="#Soc" className="twitter">
                                        <i class="fa-brands fa-twitter fa-lg"></i>
                                    </a></li>
                                    <li><a href="#Soc" className="facebook">
                                        <i class="fa-brands fa-facebook fa-lg"></i>
                                    </a></li>
                                    <li><a href="#Soc" className="instagram">
                                        <i class="fa-brands fa-instagram fa-lg"></i>
                                    </a></li>

                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="col-sm-6 col-md-4">
                            <div className="team-item">

                                <img src={marty} className="team-img" alt="pic" />
                                <h3>Marty Dy-liacco Marbella</h3>
                                <div className="team-info">
                                    <p>Web Developer and Consultant</p>
                                    <p> Marty a web developer and consultant at Print Studio. With over 200 years of experience in web development and consulting, a skilled expert who is 
                                        passionate about creating effective and efficient web solutions for clients.</p>

                                    <ul className="team-icon">

                                    <li><a href="#Soc" className="twitter">
                                        <i class="fa-brands fa-twitter fa-lg"></i>
                                    </a></li>
                                    <li><a href="#Soc" className="facebook">
                                        <i class="fa-brands fa-facebook fa-lg"></i>
                                    </a></li>
                                    <li><a href="#Soc" className="instagram">
                                        <i class="fa-brands fa-instagram fa-lg"></i>
                                    </a></li>

                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUs;