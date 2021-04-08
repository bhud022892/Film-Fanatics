import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/style.scss'

export const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="website-rights">
                        <p>Film Fanatics &copy; {new Date().getFullYear()} All Rights Reserved</p>
                    </div>

                    <ul className="social-links">
                        <li>
                            <Link to="#" className="fab fa-twitter social"></Link>
                        </li>
                        <li>
                            <Link to="#" className="fab fa-instagram social"></Link>
                        </li>
                        <li>
                            <Link to="#" className="fab fa-facebook-f social"></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
