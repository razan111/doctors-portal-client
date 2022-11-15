import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const SignUp = () => {
    const {createUser, updateUser} = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [signUpError , setSignUpError] = useState('')

    const handleSignup = data => {
        console.log(data)
        setSignUpError('')
        console.error(errors)
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user
            console.log(user)
            toast('Account create Successfully')
            const userInfo ={
                displayName: data.name
            }
            updateUser(userInfo)
            .then(() => {})
            .catch(err => console.error(err))

        })
        .catch(err => {
            setSignUpError(err.message)
            console.error(err)
        })
    }
    return (
        <div className='md:h-[800px] h-[600px] flex justify-center items-center '>
            <div className='md:w-96 w-80 p-7 border-solid border-1 rounded-xl shadow-2xl'>
                <h2 className='text-3xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: "Name is requred" })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p role='alert' className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: "Email is requred" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p role='alert' className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {
                            required: "Password is requared",
                            minLength: { value: 6, message: 'Password must be 6 character'},
                            pattern: {value: /(?=.*[A-Z])(?=.*[!@#$%^&*])/, message: 'Password must be A-Z & special char'}
                        })} className="input input-bordered w-full max-w-xs" />

                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    <input type="submit" value='Sign Up' className='btn w-full mt-4' />
                    {
                        signUpError && <p className='text-red-600'>{signUpError}</p>
                    }
                </form>
                <p className='text-sm text-center mt-2'>Already have an account <Link to='/login' className='text-primary font-semibold'>LogIn?</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continue to google</button>
            </div>
        </div>
    );
};

export default SignUp;