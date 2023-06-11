import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import useUserRole from '../hooks/useUserRole';

const StudentRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [userRole, userLoading] = useUserRole();
    const location = useLocation();

    if (loading || userLoading) {
        return <progress className="progress w-56 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></progress>
    }

    if (user && userRole.role === 'student') {
        return children;
    }

    return <Navigate state={{ from: location }} to='/login' replace />
};

export default StudentRoute;