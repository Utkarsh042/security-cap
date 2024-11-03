import React from 'react';
import './SecurityCaptainForm.css';

function SecurityCaptainForm() {
    return (
        <>
        <h1>Apply to become a Security Captain</h1>
        <div className="form-container">
            
            <form>
                <div className="form-group">
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="E-mail" required />
                </div>
                <div className="form-group">
                    <input type="tel" placeholder="Phone Number" required />
                    <input type="url" placeholder="LinkedIn Profile" />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Certificate Status" />
                    <input type="number" placeholder="Years of Experience in Cyber Security" />
                </div>
                <div className="form-group full-width">
                    <textarea placeholder="Why do you want to be a security captain?" required></textarea>
                </div>
                <div className="form-group full-width">
                    <label>Upload Resume</label>
                    <input type="file" accept=".pdf, .doc, .docx" />
                </div>
                <div className="form-group full-width">
                    <label>Upload SecDev Certification (if completed, PDF)</label>
                    <input type="file" accept=".pdf" />
                </div>
                <button type="submit">Submit Application</button>
            </form>
        </div>
        </>
    );
}

export default SecurityCaptainForm;
