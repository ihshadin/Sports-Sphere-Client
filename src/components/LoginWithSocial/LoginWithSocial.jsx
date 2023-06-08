import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import googleBtnImg from '../../assets/images/google-btn.png'
import gitHubBtnImg from '../../assets/images/github-btn.png'

const LoginWithSocial = () => {
    return (
        <div className='flex justify-center gap-5'>
            <span className='sphere-primary-bg p-3 inline-block rounded-full text-white hover:text-[#445760] border border-spacing-2 hover:bg-white cursor-pointer'>
                <BsGoogle className='h-5 w-5 ' />
            </span>
            {/* <img src={googleBtnImg} alt="" />
            <img src={gitHubBtnImg} alt="" /> */}
        </div>
    );
};

export default LoginWithSocial;