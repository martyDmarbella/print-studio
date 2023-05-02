import React, { useState } from 'react';

import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import '../styles/shop.css';

import products from '../assets/data/products';
import ProductList from '../components/UI/ProductList';

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === 'jersey') {
      const filteredProducts = products.filter(
        (item) => item.category === 'jersey'
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === 'cap') {
      const filteredProducts = products.filter(
        (item) => item.category === 'cap'
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === 'jacket') {
      const filteredProducts = products.filter(
        (item) => item.category === 'jacket'
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === 'mug') {
      const filteredProducts = products.filter(
        (item) => item.category === 'mug'
      );

      setProductsData(filteredProducts);
    }

    if (filterValue === 'tshirt') {
      const filteredProducts = products.filter(
        (item) => item.category === 'tshirt'
      );

      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProducts);
  };

  return (
    <Helmet title='shop'>
      <CommonSection title='Products' />

      <section>
        <Container>
          <Row>
            <Col lg='3' md='3'>
              <div className='filter_widget'>
                <select onChange={handleFilter}>
                  <option>Filter By Category</option>
                  <option value='tshirt'>Tshirt</option>
                  <option value='mug'>Mug</option>
                  <option value='jacket'>Jacket</option>
                  <option value='cap'>Cap</option>
                  <option value='jersey'>Jersey</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='3'>
              <div className='filter_widget'>
                <select>
                  <option>Sort By</option>
                  <option value='best-match'>Best Match</option>
                  <option value='popularity'>Popularity</option>
                  <option value='high-to-low'>Price: high to low</option>
                  <option value='low-to-high'>Price: low to high</option>
                  <option value='top-rated'>Top Rated</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='search_box'>
                <input
                  type='text'
                  placeholder='Search......'
                  onChange={handleSearch}
                />
                <span>
                  <i class='ri-search-line'></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className='text-center fs-4'>No products are found!</h1>
            ) : (
              <ProductList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
