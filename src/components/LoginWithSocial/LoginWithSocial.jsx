import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';

const LoginWithSocial = () => {
    const { googleLogin } = useAuth();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='flex justify-center gap-5'>
            <span onClick={handleGoogleLogin} className='p-4 inline-block rounded-full text-white hover:text-[#445760] border-2 border-[#445760] hover:bg-white cursor-pointer'>
                <FcGoogle className='h-6 w-6 ' />
            </span>
        </div>
    );
};

export default LoginWithSocial;