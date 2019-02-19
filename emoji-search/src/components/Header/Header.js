import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div className="header">
            <p className="header-text" >
                <span role="img" aria-label="Smiley">😃</span>
                <span> Emoji Search </span>
                <span role="img" aria-label="Smiley">🙃</span>
            </p>
        </div>
    )
};

export default Header;