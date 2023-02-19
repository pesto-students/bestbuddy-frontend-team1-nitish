import React from 'react';
import { useDispatch } from 'react-redux';

import './Signup.scss';
import CustomForm from '../../components/customForm/CustomForm';
import { signUp } from '../../store/slice/users/userSlice';

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
        id: 2,
        label: 'Email Address',
        name: "email",
        type: 'text',
        placeholder: 'Enter your email adderess',
        errorMessage: "Email is required.",
        validation: {
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            errMess: "Email is invalid."
        }
    },
    {
        id: 3,
        label: 'Phone Number',
        name: 'number',
        type: 'text',
        placeholder: 'Enter your phone number',
        errorMessage: "Phone number is required.",
        validation: {
            pattern: /^\d{10}$/g,
            errMess: 'Number is invalid.'
        }
    },
    {
        id: 4,
        label: 'Gender',
        name: 'gender',
        type: 'dropdown',
        placeholder: 'Select Gender',
        errorMessage: "Gender is required.",
        validation: {
            pattern: '',
            errMess: ''
        },
        option: ['Male', 'Female']
    },
    {
        id: 5,
        label: 'Password',
        name: 'password',
        type: 'password',
        placeholder: 'Enter a password',
        errorMessage: "Password is required.",
        validation: {
            pattern: '',
            errMess: ''
        }
    },
    {
        id: 6,
        label: 'Conform Password',
        name: 'conformPassword',
        type: 'password',
        placeholder: 'Conform a password',
        errorMessage: "Conform your password.",
        validation: {
            pattern: '',
            errMess: ''
        }
    }
]

const Signup = () => {
    const dispatch = useDispatch();

    const formSubmit = (data) => {
        dispatch(signUp(data))
    };

    return (
        <div className='signup-page'>
            <div className='banner-container'>
                <img src="https://res.cloudinary.com/dirosugvb/image/upload/v1676389415/signin-banner_fvgisc.png" alt='signup-banner' />
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
                <CustomForm title='Sign Up' Inputs={formFeild} onSubmit={formSubmit} />
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

export default Signup;