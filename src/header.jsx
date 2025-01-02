import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import logo from './assets/images/logo.png';
import ambulance from './assets/images/ambulance.png'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top">
            <div className="container">  
                <img src={logo} className='img-fluid custom-img ' alt="logo" />

                <Link to="/" className="navbar-brand text-info fs-1 ms-3">
                    Yadini
                </Link>
                <button
                    className="navbar-toggler me-5"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mynavbar"
                    aria-controls="mynavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Navbar */}
                <div className="collapse navbar-collapse" id="mynavbar">
                    <div className="d-flex">
                        <button
                            className="btn text-light "
                            style={{
                                padding: '5px 10px',
                                marginRight: '20px',
                                backgroundColor: '#00aaa1',
                                border: '2px solid #00aaa1',
                                borderRadius: '10px',
                                animation: 'blinker 2s linear infinite',
                                cursor: 'pointer',
                            }}
                            type="button"
                        >
                            PET/CT Scan
                        </button>

                        <button className="btn right-text-mhc " type="button">
                            Health Check
                        </button>
                        <button className="btn right-text-mhc1" type="button">
                            Emergency Medicine
                        </button>
                        <button className="btn btn-outline-secondary  bookapp" type="button">
                            Book Video Consultation
                        </button>
                        <div>
                            <img src={ambulance} className='img-fluid custom-img1' />
                            <div> Emergency Number</div>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;