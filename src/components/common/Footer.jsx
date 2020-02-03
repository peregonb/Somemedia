import React from 'react';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrap wrap">
                <div className="mainFifth-footer">
                    <span>AppCo</span>
                    <span>All rights reserved by ThemeTags</span>
                    <span>Copyrights © {new Date().getFullYear()}. </span>
                </div>
            </div>
        </footer>
    );
}

