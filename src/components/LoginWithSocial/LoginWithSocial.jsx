import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginWithSocial = () => {
    const { googleLogin, facebookLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                const saveUser = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    phoneNumber: user.phoneNumber,
                    role: 'student',
                }
                fetch('https://sports-sphere-server.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        navigate(from, { replace: true })
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const hanleFacebookLogin = () => {
        facebookLogin()
            .then(result => {
                const user = result.user;
                const saveUser = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                    phoneNumber: user.phoneNumber,
                    role: 'student',
                }
                fetch('https://sports-sphere-server.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        navigate(from, { replace: true })
                    })
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