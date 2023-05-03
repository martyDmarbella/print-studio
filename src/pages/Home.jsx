import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/ps.gif';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../assets/data/products';
import Services from '../services/Services';
import ProductList from '../components/UI/ProductList';
import Clock from '../components/UI/Clock';
import counterImg from '../assets/images/counter-timer-img.png';
import jayson from "../assets/images/jayson.jpg"
import jaime from "../assets/images/jaime.jpg"
import marty from "../assets/images/marty.jpg"


const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [capProducts, setcapProducts] = useState([]);
  const [jacketProducts, setjacketProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === 'tshirt'
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === 'jersey'
    );

    const filteredcapProducts = products.filter(
      (item) => item.category === 'cap'
    );

    const filteredjacketProducts = products.filter(
      (item) => item.category === 'jacket'
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === 'mug'
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setcapProducts(filteredcapProducts);
    setjacketProducts(filteredjacketProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);
  return (
    <>
    <Helmet title={'Home'}>
      <section className='hero_section'>
        <Container>
          <Row>
            <Col lg='4' md='4'>
              <div className='hero_content'>
                <p className='hero_subtitle'>Print Studio {year}</p>
                <h2>High-quality solutions for all your printing needs!</h2>
                <p>
                  Welcome to our Print Studio, where creativity meets technology. Our team of experts is dedicated to 
                  providing high-quality printing services that exceed your expectations. From graphic design to 
                  large-format printing, we offer a wide range of solutions to suit your needs. Let us bring your 
                  ideas to life and make your vision a reality.
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className='shop_btn'>
                  <Link to='/shop'>SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg='8' md='8'>
              <div className='hero_img'>
                <img src={heroImg} alt='hero-banner' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Services />
      <section className='trending_products'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section_title'>Trending Products</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className='best_sales'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section_title'>Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className='timer_count'>
        <Container>
          <Row>
            <Col lg='6' md='12' className='count_down-col'>
              <div className='clock_top-content'>
                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Quality One Piece Jacket</h3>
              </div>
              <Clock />

              <motion.button
                whileTap={{ scale: 1.2 }}
                className='shop_btn store_btn'
              >
                <Link to='/shop'>Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg='6' md='12' className='text-end counter_img'>
              <img src={counterImg} alt='sale_chair' />
            </Col>
          </Row>
        </Container>
      </section>

      <section className='new_arrivals'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section_title'>New Arrivals</h2>
            </Col>
            <ProductList data={capProducts} />
            <ProductList data={jacketProducts} />
          </Row>
        </Container>
      </section>

      <section className='popular_category'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section_title'>Popular in Category</h2>
            </Col>
            <ProductList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>

<section className="section-white">
<div className="container">
    <div className="row">

        <div className="col-md-12 text-center">
            <h2 className="section-title">
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
};


export default Home;
