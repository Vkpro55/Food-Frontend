import React from 'react'
import footerlogo from '../../assets/footerlogo.png'
import linkedinIcon from '../../assets/linkedin.png';
import githubIcon from '../../assets/github.png';

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className="container footer-container">
                <div className='footer-logo'>
                    <img src={footerlogo} alt="footerlogo-image" />
                    <h1>FitMe</h1>
                </div>
                <div className='footer-contact'>
                    <a
                        href="https://www.linkedin.com/in/vinod-kumar057/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <img src={linkedinIcon} alt="LinkedIn" className="social-img" />
                    </a>
                    <a
                        href="https://github.com/Vkpro55"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <img src={githubIcon} alt="GitHub" className="social-img" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
