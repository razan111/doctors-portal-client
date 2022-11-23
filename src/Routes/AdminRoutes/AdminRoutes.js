import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Spiner from '../../components/Spiner/Spiner';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../hocks/useAdmin';

const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const [ isAdmin, isAdminLoading ] = useAdmin(user?.email)
    const location = useLocation()
    // const navigate = useNavigate()

    if(loading || isAdminLoading){
        return <Spiner></Spiner>
      
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default AdminRoute;