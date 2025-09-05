import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// ADDED: Import for custom components (you'll need to create these files)
import FormContainer from "../components/FormContainer";
import FormInput from "../components/FormInput";
import FileUpload from "../components/FileUpload";
import SubmitButton from "../components/SubmitButton";
import FormHeader from "../components/FormHeader";
import FormFooter from "../components/FormFooter";

function RegisterForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [file, setFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('password', formData.password);
        if (file) {
            data.append('profileImage', file);
        }

        try {
            const response = await fetch('http://localhost:5000/api/users/register', {
                method: 'POST',
                body: data, // No Content-Type header needed for FormData
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Registration failed by response');
            }

            alert('Registration successful!');
            // Reset form
            setFormData({ name: '', email: '', password: '' });
            setFile(null);
            navigate('/login');

        } catch (err) {
            console.error('Registration error:', err);
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        // ✅ ADDED: Background video wrapper
        <div className="background-video-container">
            <video autoPlay loop muted playsInline className="background-video">
                <source src="/assets/luxury-bg.mp4" type="video/mp4" />
            </video>

            <div className="form-wrapper">
                <FormContainer>
                    {/* ADDED: FormHeader component */}
                    <FormHeader
                        title="Create Your Account"
                        subtitle="Join our community by filling out the information below"
                    />

                    <form onSubmit={handleSubmit} className="register-form">
                        {error && <div className="error-message">{error}</div>}

                        {/* ADDED: Using FormInput components */}
                        <FormInput
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required={true}
                            icon="person"
                        />

                        <FormInput
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required={true}
                            icon="email"
                        />

                        <FormInput
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required={true}
                            minLength="6"
                            icon="lock"
                        />

                        {/* ADDED: Using FileUpload component */}
                        <FileUpload
                            file={file}
                            handleFileChange={handleFileChange}
                            accept="image/*"
                            label="Profile Image"
                            id="profileImage"
                        />

                        {/* ADDED: Using SubmitButton component */}
                        <SubmitButton
                            isSubmitting={isSubmitting}
                            text="Register"
                            submittingText="Registering..."
                        />

                        {/* ADDED: Using FormFooter component */}
                        <FormFooter
                            text="Already have an account?"
                            linkText="Log in"
                            onClick={() => navigate('/login')}
                        />
                    </form>
                </FormContainer>
            </div>
        </div>
    );
}

export default RegisterForm;
