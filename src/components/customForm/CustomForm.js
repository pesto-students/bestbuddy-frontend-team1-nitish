import React from 'react';
import { useForm } from 'react-hook-form'

import './CustomForm.scss';

const CustomForm = ({ title, Inputs }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const formSubmit = (data) => {
        console.log(data)
    };

    return (
        <form className='custom-form' onSubmit={handleSubmit(formSubmit)}>
            <h2 className='form-title'>{title}</h2>
            {Inputs.map((item) => (
                <section key={item.id}>
                    <label>{item.label}</label>
                    <input
                        className={errors[item.name] ? 'input-error' : ''}
                        type={item.type}
                        placeholder={item.placeholder}
                        name={item.name}
                        {...register(item.name, {
                            required: item.errorMessage,
                            pattern: {
                                value: item.validation.pattern,
                                message: item.validation.errMess
                            }
                        })}
                    />
                    {errors[item.name] && <p className='error-message'>{errors[item.name].message}</p>}
                </section>
            ))}
            <section>
                <button type='submit' className='btn-form-submit'>Sign Up</button>
            </section>
            {title === 'Sign In' && <section>
                <button className='btn-form-submit'>Login with Google</button>
            </section>}
        </form>
    )
}

export default CustomForm;