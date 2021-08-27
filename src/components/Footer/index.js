import React from 'react';
import { NavLink } from 'react-router-dom';
import header_logo from '../../assets/header.svg';
import './style.scss';
const Footer = () => {
    return (
        <div className="footer">
            <div className="logo">
                <img src={header_logo} alt="header" className="logo" />
            </div>
            <div className="navlink">
                <NavLink to="/work" activeClassName="work">Work</NavLink>
                <NavLink to="/about" activeClassName="work">About</NavLink>
                <NavLink to="/contract" activeClassName="work">Contract</NavLink>
                <NavLink to="/other" activeClassName="work">Other</NavLink>
            </div>
        </div>
    )
}

export default Footer;