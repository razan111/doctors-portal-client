import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    if(loading){
        return <>
        <progress className="progress w-56"></progress>
        </>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;