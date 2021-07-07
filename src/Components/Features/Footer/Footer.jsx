import './Footer.css';
import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer() {
    return (
        <div id="icons">
            <div className="iconDiv">
                <a href="https://www.linkedin.com/feed/" target="blanc"><LinkedInIcon /></a>
                <a href="https://www.facebook.com/" target="blanc"><FacebookIcon /></a>
                <a href="https://github.com/sigalavera" target="blanc"><GitHubIcon /></a>
            </div>

            
            <p className="textFild"> <CopyrightIcon /> Fullstack Developer Sigalit Avera </p>
        </div>
    )
}
export default Footer;