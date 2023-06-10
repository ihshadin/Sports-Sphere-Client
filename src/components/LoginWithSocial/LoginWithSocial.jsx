import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

const LoginWithSocial = () => {
    const { googleLogin, facebookLogin } = useAuth();

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const hanleFacebookLogin = () => {
        facebookLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='flex justify-center gap-5'>
            <span onClick={handleGoogleLogin} className='p-4 inline-block rounded-full text-[#445760] border-2 border-[#445760] hover:bg-white cursor-pointer'>
                <FcGoogle className='h-6 w-6 ' />
            </span>
            <span onClick={hanleFacebookLogin} className='p-4 inline-block rounded-full text-[#445760] border-2 border-[#445760] hover:bg-white cursor-pointer'>
                <FaFacebookF className='h-6 w-6 ' />
            </span>
        </div>
    );
};

export default LoginWithSocial;