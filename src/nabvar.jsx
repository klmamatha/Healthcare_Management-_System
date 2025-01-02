import React, { useState } from "react";

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-green-100 py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                {/* Logo */}
                <div className="text-xl font-bold text-green-800">LOGO</div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-green-800">
                    <li>
                        <a href="/" className="hover:text-green-600">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="hover:text-green-600">
                            About Us
                        </a>
                    </li>
                    <li className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="hover:text-green-600 focus:outline-none"
                        >
                            Services
                        </button>
                        {isDropdownOpen && (
                            <ul className="absolute bg-white shadow-md mt-2 py-2 w-40">
                                <li>
                                    <a
                                        href="/service1"
                                        className="block px-4 py-2 hover:bg-green-100 hover:text-green-600"
                                    >
                                        Service 1
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/service2"
                                        className="block px-4 py-2 hover:bg-green-100 hover:text-green-600"
                                    >
                                        Service 2
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/service3"
                                        className="block px-4 py-2 hover:bg-green-100 hover:text-green-600"
                                    >
                                        Service 3
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <a href="/career" className="hover:text-green-600">
                            Career
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="hover:text-green-600">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Mobile Hamburger Menu */}
                <div className="md:hidden">
                    <button
                        className="text-green-800 focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <ul className="md:hidden bg-green-100 px-4 py-2 space-y-2">
                    <li>
                        <a href="/" className="block hover:text-green-600">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="block hover:text-green-600">
                            About Us
                        </a>
                    </li>
                    <li className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="block hover:text-green-600 focus:outline-none"
                        >
                            Services
                        </button>
                        {isDropdownOpen && (
                            <ul className="bg-white shadow-md mt-2 py-2 w-full">
                                <li>
                                    <a
                                        href="/service1"
                                        className="block px-4 py-2 hover:bg-green-100 hover:text-green-600"
                                    >
                                        Service 1
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/service2"
                                        className="block px-4 py-2 hover:bg-green-100 hover:text-green-600"
                                    >
                                        Service 2
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="/service3"
                                        className="block px-4 py-2 hover:bg-green-100 hover:text-green-600"
                                    >
                                        Service 3
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <a href="/career" className="block hover:text-green-600">
                            Career
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="block hover:text-green-600">
                            Contact
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
