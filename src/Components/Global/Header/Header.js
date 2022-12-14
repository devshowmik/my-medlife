import React, { useContext } from 'react';
import { FaMoon, FaPortrait, FaShoppingCart, FaSun } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../Context/AuthContext/AuthContext';
import { DarkContext } from '../../../Context/DarkMode/DarkMode';

const Header = () => {
    const { user, handleLogOut } = useContext(AuthProvider);
    const { darkMode, setDarkMode } = useContext(DarkContext);
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#medlife-main-nav" aria-controls="medlife-main-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="medlife-main-nav">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link fw-semibold text-black" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold text-black" aria-current="page" href="/shop">Medicine</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold text-black" aria-current="page" href="/services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold text-black" aria-current="page" href="/contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-semibold text-black" aria-current="page" href="/blog">Blog</a>
                        </li>
                    </ul>
                    <div className="header-action-area d-flex gap-4">
                        <div className="login-register ">
                            {
                                user
                                    ?
                                    <button onClick={handleLogOut} type="button" className="btn btn-link bg-gradient text-decoration-none text-capitalize text-dark fw-semibold">
                                        <FaPortrait /> logout
                                    </button>
                                    :
                                    <Link to='/login' className="btn btn-link bg-gradient text-decoration-none text-capitalize text-dark fw-semibold">
                                        <FaPortrait /> login
                                    </Link>

                            }
                        </div>
                        <div className="cart ">
                            <Link to='/cart' type="button" className="btn btn-primary bg-gradient">
                                <FaShoppingCart /> Cart
                            </Link>
                        </div>
                        <div className="form-check form-switch d-flex align-items-center gap-2">
                            <input onChange={() => setDarkMode(!darkMode)} className="form-check-input " type="checkbox" role="switch" id="darkSwitch" />
                            <label className="form-check-label" htmlFor="darkSwitch">{darkMode ? <FaMoon className='fs-6' /> : <FaSun className='text-warning' />}</label>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;