import React from "react";
import jayson from "../assets/images/jayson.jpg"
import jaime from "../assets/images/jaime.jpg"
import marty from "../assets/images/marty.jpg"

const AboutUs = () => {
    return (
        <>
         <div className="search-panel d-none" id="searchPanel">
      <div className="search-panel-inner p-4">
        <div className="seach-panel-close">
          <button className="btn btn-primary rounded-0 shadow-0 p-2" id="searchCloseBtn" type="button" onclick="closeSearch()">
            <svg className="svg-icon text-white mt-1">
              <use href="#close-1"> </use>
            </svg>
          </button>
        </div>
        <form className="w-100" action="#">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="d-flex align-items-center mb-3 border-bottom">
                <input className="form-control form-control-lg bg-none border-0 shadow-0 rounded-0 px-0" type="text" placeholder="What are you searching for" aria-describedby="button-addon2" />
                <button className="btn btn-link text-dark shadow-0 px-0 text-decoration-none" id="button-addon2" type="submit"><i className="fas fa-search"></i></button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    
    <section className="py-5 bg-light">
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-9 order-2 order-lg-1">
            <h1>About us</h1>
          </div>
          <div className="col-lg-3 text-end order-1 order-lg-2">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb py-4 justify-content-lg-end mb-0">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active">About us</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
   
    <section className="py-5">
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-8 col-sm-9 py-lg-4">
            <h2>How it all began</h2>
            <p className="text-muted fw-normal mb-0">As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.</p>
          </div>
          <div className="col-lg-4 col-sm-3 py-lg-4 d-none d-sm-block">
            <div className="about-icon ml-lg-0"><i className="fa-sharp fa-solid fa-chart-line fa-2xl" style={{color:"#008aff"}} ></i></div>
          </div>
          <div className="col-lg-4 col-sm-3 py-lg-4 text-end d-none d-sm-block">
            <div className="about-icon mr-lg-0"><i class="fa-regular fa-user fa-2xl" style={{color:"#008aff"}} ></i></div>
          </div>
          <div className="col-lg-8 col-sm-9 py-lg-4">
            <h2>Who we are</h2>
            <p className="text-muted fw-normal mb-0">As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.</p>
          </div>
          <div className="col-lg-8 col-sm-9 py-lg-4">
            <h2>We care</h2>
            <p className="text-muted fw-normal mb-0">As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.</p>
          </div>
          <div className="col-lg-4 col-sm-3 py-lg-4 d-none d-sm-block">
            <div className="about-icon ml-lg-0"><i class="fa-regular fa-heart fa-2xl" style={{color:"#008aff"}}></i></div>
          </div>
          <div className="col-lg-4 col-sm-3 py-lg-4 text-end d-none d-sm-block">
            <div className="about-icon mr-lg-0"><i class="fa-sharp fa-solid fa-truck-moving fa-2xl" style={{color:"#008aff"}}></i></div>
          </div>
          <div className="col-lg-8 col-sm-9 py-lg-4">
            <h2>Fast delivery</h2>
            <p className="text-muted fw-normal mb-0">As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.</p>
          </div>
          <div className="col-lg-8 col-sm-9 py-lg-4">
            <h2>Your security and privacy matters</h2>
            <p className="text-muted fw-normal mb-0">As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity.</p>
          </div>
          <div className="col-lg-4 col-sm-3 py-lg-4 d-none d-sm-block">
            <div className="about-icon ml-lg-0"><i className="fas fa-shield-alt"></i></div>
          </div>
        </div>
      </div>
    </section>
    
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
                                        <i className="fa-brands fa-twitter fa-lg"></i>
                                    </a></li>
                                    <li><a href="#Soc" className="facebook">
                                        <i className="fa-brands fa-facebook fa-lg"></i>
                                    </a></li>
                                    <li><a href="#Soc" className="instagram">
                                        <i className="fa-brands fa-instagram fa-lg"></i>
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
                                        <i className="fa-brands fa-twitter fa-lg"></i>
                                    </a></li>
                                    <li><a href="#Soc" className="facebook">
                                        <i className="fa-brands fa-facebook fa-lg"></i>
                                    </a></li>
                                    <li><a href="#Soc" className="instagram">
                                        <i className="fa-brands fa-instagram fa-lg"></i>
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
                                        <i className="fa-brands fa-twitter fa-lg"></i>
                                    </a></li>
                                    <li><a href="#Soc" className="facebook">
                                        <i className="fa-brands fa-facebook fa-lg"></i>
                                    </a></li>
                                    <li><a href="#Soc" className="instagram">
                                        <i className="fa-brands fa-instagram fa-lg"></i>
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