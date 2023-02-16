import React from 'react';

import './Signin.scss';
import CustomForm from '../../components/customForm/CustomForm';

const formFeild = [
    {
        id: 1,
        label: 'User Name',
        name: 'userName',
        type: 'text',
        placeholder: 'Enter your user name',
        errorMessage: "User name is required.",
        validation: {
            pattern: '',
            errMess: ''
        }
    },
    {
        id: 4,
        label: 'Password',
        name: 'password',
        type: 'password',
        placeholder: 'Enter a password',
        errorMessage: "Password is required.",
        validation: {
            pattern: '',
            errMess: ''
        }
    }
]

const Signin = () => {
    return (
        <div className='signin-page'>
            <div className='banner-container'>
                <img src="https://res.cloudinary.com/dirosugvb/image/upload/v1676389450/login-banner_nvmi8h.png" alt='signin-banner' />
            </div>

            {/* mobile headers */}
            <div className='best-buddylogo'>
                <img src='https://res.cloudinary.com/dirosugvb/image/upload/v1676559711/BestBuddylogo_ltm21g.png' alt='logo' />
            </div>
            <div className='mobile-banner-container'>
                <img src="https://res.cloudinary.com/dirosugvb/image/upload/v1676557474/mobile-banner_vp7zlj.png" alt='signin-banner' />
            </div>
            {/* mobile headers */}

            <div className='form-container'>
                <CustomForm title='Sign In' Inputs={formFeild} />
            </div>

            {/* mobile footer */}
            <div className='footer-container'>
                <img className='footer-primary' src='https://res.cloudinary.com/dirosugvb/image/upload/v1676557474/footer_rsg8mh.png' alt='footer' />
                <img className='footer-secondary' src='https://res.cloudinary.com/dirosugvb/image/upload/v1676557475/footer1_p6sf6m.png' alt='footer' />
            </div>
            {/* mobile footer */}
        </div>
    )
}

export default Signin;