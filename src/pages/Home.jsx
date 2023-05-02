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
  );
};

export default Home;

// continue at 1:21:48
