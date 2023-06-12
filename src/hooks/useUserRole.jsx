import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useUserRole = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: userRole = [], isLoading: userLoading } = useQuery({
        queryKey: ['usersRole', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/role/${user?.email}`)
            console.log(res);
            return res.data;
        }
    })
    return [userRole, userLoading];
};

export default useUserRole;