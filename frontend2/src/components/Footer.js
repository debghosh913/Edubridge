import React from 'react';
import '../App.css'; // ✅ ADDED: Import styles so our footer looks nice

const Footer = () => {
    return (
        // ✅ ADDED: Styled footer with a class (instead of plain <p>footer</p>)
        <footer className="page-footer">
            © 2025 My App | Built with ❤️ {/* ✅ ADDED: Custom footer text */}
        </footer>
    );
};

export default Footer;
