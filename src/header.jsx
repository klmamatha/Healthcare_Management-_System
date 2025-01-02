import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import logo from './assets/images/logo.png';

const Header = () => {
    return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top">
            <div className="container">
                {/* Logo */}
                <Link to="/" className="navbar-brand text-info fs-1 fw-bold d-flex align-items-center">
                    <img src={logo} className="img-fluid w-10 h-8" alt="Logo" />
                    Vydehi
                </Link>

                {/* Mobile Toggle Button */}
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
                        {/* PET/CT Scan Button */}
                        <button
                            className="btn text-light me-4 ms-5"
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

                        {/* Health Check Button */}
                        <button
                            className="btn text-light me-4"
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
                            Health Check
                        </button>

                        {/* Emergency Medicine Button */}
                        <button
                            className="btn text-light me-4"
                            style={{
                                padding: '5px 10px',
                                marginRight: '20px',
                                backgroundColor: 'brown',
                                border: '2px solid rgb(71, 23, 23)',
                                borderRadius: '10px',
                                animation: 'blinker 2s linear infinite',
                                cursor: 'pointer',
                            }}
                            type="button"
                        >
                            Emergency Medicine
                        </button>

                        {/* Video Consultation Button */}
                        <button className="btn btn-outline-secondary me-4" type="button">
                            Book Video Consultation
                        </button>
                    </div>
                </div>
            </div>
        </nav>
  );
};

export default Header;
