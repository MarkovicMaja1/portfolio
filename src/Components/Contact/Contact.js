import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
        <div className='contact-title'>
            Contact Info
        </div>
        <div className='contact-body'>
            <div className='contact-item'>
                <img src={require('../../Assets/phone1.png')} alt="Phone" className='contact-icon' />
                <div className='contact-text'>
                    <h1 className='contact-name'>Phone</h1>
                    <h2 className='contact-name'>063/893-3306</h2>
                </div>
            </div>
            <div className='contact-item'>
                <img src={require('../../Assets/gmail1.png')} alt="Gmail" className='contact-icon' />
                <div className='contact-text'>
                    <h1 className='contact-name'>Email</h1>
                    <h2 className='contact-name'>majamarkovic.b@gmail.com</h2>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Contact;

