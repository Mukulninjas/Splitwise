import Cookies from 'js-cookie';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ Component }) => {
    const navigate = useNavigate();
    
    useEffect(() => {
        const isAuthenticated = Cookies.get('token');
        if (!isAuthenticated) {
            navigate('/login');
        }
    });

  return (
    <Component/>
  )
}

export default ProtectedRoute