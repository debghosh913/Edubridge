import React from 'react';


const SubmitButton = ({ isSubmitting, text, submittingText }) => {
    return (
        <button
            type="submit"
            disabled={isSubmitting}
            className="submit-button"
        >
            {isSubmitting ? (
                <>
                    <span className="spinner"></span>
                    {submittingText}
                </>
            ) : text}
        </button>
    );
};

export default SubmitButton;