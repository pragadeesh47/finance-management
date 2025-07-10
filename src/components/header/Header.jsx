import React from 'react';
import './Header.css';
import Logo from '../../assets/logo.png'

const Header = ({ onMenuClick }) => {
    return (
        <header className="header">
            <button className="menu-button" onClick={onMenuClick}>
                ☰
            </button>
            <div className="logo-container">
                <img src={Logo} alt="Logo" className="logo" />
                <span className="company-name">Finance Management</span>
            </div>
        </header>
    );
};

export default Header;
