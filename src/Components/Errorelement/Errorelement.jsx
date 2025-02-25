import React from 'react';
import './Errorelement.css'; 

const Errorelement = () => {
    return (
        <div className="error-container">
            <div className="error-content">
                <h1 className="error-title">Oops! Something went wrong.</h1>
                <p className="error-message">We couldn't find the page you were looking for.</p>
                <p className="error-suggestion">Please check the URL or try again later.</p>
                <a href="/" className="error-link">Go back to homepage</a>
            </div>
        </div>
    );
};

export default Errorelement;