import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footer-section'>
                    <h3>ABOUT US</h3> {/* h1 এর পরিবর্তে h3 */}
                    <p>Amet nisl purus in mollis nunc sed id. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Volutpat a tincidunt vitae semper pellentesque diam volutpat.</p>
                    <ul>
                        <li><a href="#">Home</a></li> {/* href এ # যোগ করা হলো */}
                        <li><a href="#">All Reviews</a></li>
                        <li><a href="#">Add Reviews</a></li>
                        <li><a href="#">My Reviews</a></li>
                        <li><a href="#">Game Watchlist</a></li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <h3>LATEST NEWS</h3> {/* h1 এর পরিবর্তে h3 */}
                    <div className='news-item'>
                        <h4>About Space and World</h4>
                        <p>January 2, 2018</p>
                    </div>
                    <div className="news-item">
                        <h4>New Trailer is Released!</h4>
                        <p>January 2, 2018</p>
                    </div>
                    <div className="news-item">
                        <h4>Price List of the Games</h4>
                        <p>January 2, 2018</p>
                    </div>
                </div>
                <div className="footer-section">
                    <h3>APPS & PLATFORMS</h3>
                    <div className="app-buttons">
                        <button>Buy now via Apple Store</button>
                        <button>Buy now via Google Play</button>
                        <button>Buy now via Steam</button>
                        <button>Download via WinStore</button>
                        <button>Buy now via Amazon</button>
                        <button>Download via PayPal</button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>CLOUXGAME Copyright © 2018 Cloux - All rights reserved.</p>
                <nav> {/* nav ট্যাগ ব্যবহার করা হলো */}
                    <a href="#">Home</a>
                    <a href="#">Help Center</a>
                    <a href="#">Contact</a>
                    <a href="#">Career</a>
                    <a href="#">Advertise</a>
                    <a href="#">Terms and Conditions</a>
                </nav>
            </div>
        </div>
    );
};

export default Footer;