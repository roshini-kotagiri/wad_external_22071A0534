import React from 'react'
import img1 from '../images/img4.jpeg'
import img2 from '../images/img5.jpeg'
import img3 from '../images/img6.jpeg'
import image from '../images/images.png'
import { Link } from 'react-router-dom'

function Shop() {
  return (
    <div>
        <div className="container mt-5">
            <h1 className="text-center mb-4">Welcome to Shoppi !!</h1>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={img1} className="card-img-top" alt="Card Image" />
                        <div className="card-body">
                            <h5 className="card-title">Anarkali</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Link to="/cart" className="btn btn-primary">Add To Cart</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={img2} className="card-img-top" alt="Card Image" />
                        <div className="card-body">
                            <h5 className="card-title">Maxi Dress</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <Link to="/cart" className="btn btn-primary">Add To Cart</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={img3} className="card-img-top" alt="Card Image" />
                        <div className="card-body">
                            <h5 className="card-title">Frock</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Link to="/cart" className="btn btn-primary">Add To Cart</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={img1} className="card-img-top" alt="Card Image" />
                        <div className="card-body">
                            <h5 className="card-title">Anarkali</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <Link to="/cart" className="btn btn-primary">Add To Cart</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={img2} className="card-img-top" alt="Card Image" />
                        <div className="card-body">
                            <h5 className="card-title">Maxi Dress</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Link to="/cart" className="btn btn-primary">Add To Cart</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <img src={img3} className="card-img-top" alt="Card Image" />
                        <div className="card-body">
                            <h5 className="card-title">Frock</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Link to="/cart" className="btn btn-primary">Add To Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop