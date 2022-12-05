import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer border-top ">
            <div className="container ">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-4 ">
                    <div class="col-md-4 d-flex align-items-center">
                        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">

                        </a>
                        <span class="mb-3 mb-md-0 text-muted">© 2022 My-medlife</span>
                    </div>

                    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li class="ms-3"><a class="text-muted" href="/"><FaFacebookF /></a></li>
                        <li class="ms-3"><a class="text-muted" href="/"><FaInstagram /></a></li>
                        <li class="ms-3"><a class="text-muted" href="/"><FaTwitter /></a></li>
                        <li class="ms-3"><a class="text-muted" href="/"><FaLinkedinIn /></a></li>
                    </ul>
                </footer>
            </div>
        </div>
    );
};

export default Footer;