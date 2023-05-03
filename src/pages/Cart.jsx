import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [updatedCartItems, setUpdatedCartItems] = useState(cartItems);

  const handleRemoveItem = (index) => {
    const newCartItems = [...updatedCartItems];
    newCartItems.splice(index, 1);
    setUpdatedCartItems(newCartItems);
  }

  // calculate the total amount
  const totalAmount = updatedCartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Helmet title='Cart'>
      <CommonSection title='Shopping Cart' />
      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {updatedCartItems.length === 0 ? (
                <h2 className='fs-4 text-center'>No item added to the cart</h2>
              ) : (
                <table className='table bordered'>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>

                  <tbody>
                    {updatedCartItems.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <img src={item.imgUrl} alt='product' />
                        </td>
                        <td>{item.productName}</td>
                        <td>${item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <i className="fa fa-trash" onClick={() => handleRemoveItem(index)}></i>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </Col>

            <Col lg='3'>
              {/* display the total amount */}
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>Total Amount:</h5>
                  <h6 className='card-subtitle mb-2 text-muted'>${totalAmount.toFixed(2)}</h6>
                  <button className='btn btn-primary'>Proceed to Checkout</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
