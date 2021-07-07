import React from 'react';
import './Header.css';

function Header() {
    return (
        <h1 className="logoH1">
            <p className="mailSpan">
                sigi1697@gmail.com
            </p>
            <a href="https://tech-career-jobs.com/" >
                <img src="/portfolio/techLogo.jpeg" alt="techLogo" className="techLogo" />
            </a>
        </h1>
    )
}
export default Header;