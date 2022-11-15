import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();

    const {logIn} = useContext(AuthContext)

    const [loginError, setLoginError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()

    const from = location?.state?.from?.pathname || '/'

    const handleLogin = data =>{
        console.log(data)
        setLoginError('')
        
        logIn(data.email, data.password)
        .then(result => {
            const user = result.user
            console.log(user)
            navigate(from, {replace: true})
        })
        .catch(err => {
            console.error(err.message)
            setLoginError(err.message)
        })
    }

    return (
        <div className='md:h-[800px] h-[600px] flex justify-center items-center '>
            <div className='md:w-96 w-80 p-7 border-solid border-1 rounded-xl shadow-2xl'>
                <h2 className='text-3xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                   
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", {required: "Email is requred"})} className="input input-bordered w-full max-w-xs" /> 
                        {errors.email && <p role='alert' className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {required: "Password is requared", minLength: {value: 6, message: 'Password must be 6 character'}})} className="input input-bordered w-full max-w-xs" /> 

                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                        <label className="label">
                            <span className="label-text">Forget Password?</span>
                        </label>
                    </div>
                    
                    <input type="submit" value='Log In' className='btn w-full'/>

                    <div>
                        {
                            loginError && <p className='text-red-600'>{loginError}</p>
                        }
                    </div>
                </form>
                <p className='text-sm text-center mt-2'>New to Doctor's Portal <Link to='/signup' className='text-primary font-semibold'>Create new Accout</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continue to google</button>
            </div>
        </div>
    );
};

export default Login;