import React from 'react';


const FileUpload = ({ file, handleFileChange, accept, label, id }) => {
    return (
        <div className="form-group">
            <label htmlFor={id} className="file-upload-label">
                <div className="file-upload-content">
                    <span className="material-icons">cloud_upload</span>
                    <span className="file-upload-text">
            {file ? file.name : `Choose ${label}`}
          </span>
                </div>
                <input
                    id={id}
                    type="file"
                    name={id}
                    onChange={handleFileChange}
                    accept={accept}
                    className="file-input"
                />
            </label>
        </div>
    );
};

export default FileUpload;