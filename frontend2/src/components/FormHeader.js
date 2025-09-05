import React from 'react';


const FormHeader = ({ title, subtitle }) => {
    return (
        <div className="form-header">
            <h2>{title}</h2>
            {subtitle && <p className="form-subtitle">{subtitle}</p>}
        </div>
    );
};

export default FormHeader;