import React from 'react';
import { FaBars, FaUser } from 'react-icons/fa';

const DashHeader = ({ toggle }) => {
    const { sideToggle, setSideToggle } = toggle;
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
            <button onClick={() => setSideToggle(!sideToggle)} className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0 fs-5 pt-0" id="sidebarToggle" href="#!"><FaBars /></button>

            <ul className="navbar-nav ms-auto me-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"><FaUser /></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Settings</a></li>
                        <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
};

export default DashHeader;