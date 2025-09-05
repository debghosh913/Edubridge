import React from 'react';


const FormInput = ({ type, name, placeholder, value, onChange, required, minLength, icon }) => {
    return (
        <div className="form-group">
            <div className="input-with-icon">
                <span className="material-icons input-icon">{icon}</span>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    required={required}
                    minLength={minLength}
                    className="form-input"
                />
            </div>
        </div>
    );
};

export default FormInput;