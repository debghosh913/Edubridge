import React from 'react';


const FormFooter = ({ text, linkText, onClick }) => {
    return (
        <div className="form-footer">
            <p>{text} <span onClick={onClick} className="form-link">{linkText}</span></p>
        </div>
    );
};

export default FormFooter;