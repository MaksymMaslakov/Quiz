import React from "react";

import './error-indicator.css';
import icon from './error-icon.png';

const ErrorIndicator = () => {
    return (
        <div className="error-message">
            <img src={icon}
                 className="error-icon"
                 alt="error-icon"/>
            <h1 className="error-text">ERROR</h1>
        </div>
    );
};

export default ErrorIndicator;