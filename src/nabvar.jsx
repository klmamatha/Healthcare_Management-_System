import { Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm sticky-top bg-green-500 !important">
            <div className="container">

                {/* Collapsible Navbar */}
                <div className="collapse navbar-collapse" id="mynavbar">
                    <div className="d-flex">
                        {/* PET/CT Scan Button */}
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                            <li>
                                <Link to="/" className="navbar-brand text-light fw-bold d-flex align-items-center">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="navbar-brand text-light fw-bold d-flex align-items-center">
                                    About Us
                                </Link>
                            </li>
                            {/* Specialties & Services Dropdown */}
                            <li className="nav-item dropdown">
                                <Link
                                    to="#"
                                    className="nav-link dropdown-toggle text-light fw-bold"
                                    id="servicesDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Specialties & Services
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                                    <li>
                                        <Link to="/service1" className="dropdown-item">
                                            Super Speciality   ▶
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/service2" className="dropdown-item">
                                            Board Specialities   ▶
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/service3" className="dropdown-item">
                                            Ayurveda
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/service4" className="dropdown-item">
                                            Corporate Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/service5" className="dropdown-item">
                                            Critical Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/service6" className="dropdown-item">
                                            Robotic Surgery
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link to="/" className="navbar-brand text-light fw-bold d-flex align-items-center">
                                    Career
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link
                                    to="#"
                                    className="nav-link dropdown-toggle text-light fw-bold"
                                    id="updatesDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Latest Updates
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="updatesDropdown">
                                    <li>
                                        <Link to="/update1" className="dropdown-item">
                                            Update 1
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/update2" className="dropdown-item">
                                            Update 2
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link to="/" className="navbar-brand text-light fw-bold d-flex align-items-center">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                        {/* Video Consultation Button */}
                        <button className="btn btn-outline-secondary me-4" type="search">
                            Video Consultation
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
