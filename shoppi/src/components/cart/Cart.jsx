import React from 'react';
import img1 from '../images/img4.jpeg'
import { Link } from 'react-router-dom';
function Cart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Shopping Cart</h5>
              <hr />
              <div className="row">
                <div className="col-md-2">
                  <img src={img1} alt="Product" className="img-fluid" />
                </div>
                <div className="col-md-4">
                  <h6 className="card-subtitle mb-2 text-muted">Card 1</h6>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="col-md-2">
                  <p className="card-text">Rs. 599</p>
                </div>
                <div className="col-md-2">
                  <input type="number" className="form-control" value="1" />
                </div>
                <div className="col-md-2">
                  <button className="btn btn-danger">Remove</button>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-md-8">
                  <Link className="btn btn-secondary" to = "/shop">Continue Shopping</Link>
                </div>
                <div className="col-md-4">
                  <p className="text-end">Subtotal: Rs.599</p>
                  <button className="btn btn-primary">Proceed to Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <hr />
              <p className="card-text">Subtotal: Rs. 599</p>
              <p className="card-text">Shipping: Rs. 0.00</p>
              <hr />
              <h6 className="card-subtitle mb-2 text-muted">Total: Rs. 599</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
