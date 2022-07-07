import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content container">
                <div className="footer__content__logo">
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Privacy policy</Link>
                        <Link to="/">Term of services</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Top IMDB</Link>
                        <Link to="/">About us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
