import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <progress className="progress w-56 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></progress>
    }

    if (user && user.role === 'admin') {
        return children;
    }

    return <Navigate state={{ from: location }} to='/login' replace />
};

export default AdminRoute;