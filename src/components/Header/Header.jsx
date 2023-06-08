import React from 'react';
import logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { TbAlignLeft } from 'react-icons/tb'

const Header = () => {

    const defaultClasses = 'text-lg px-8 py-2 hover:bg-[#ECF8F9] hover:text-[#445760] font-medium rounded-none';
    const activeClasses = 'text-lg px-8 py-2 !bg-[#ECF8F9] sphere-primary font-medium rounded-none';
    const menuList = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? activeClasses : defaultClasses}>Home</NavLink></li>
        <li><NavLink to='/instructors' className={({ isActive }) => isActive ? activeClasses : defaultClasses}>Instructors</NavLink></li>
        <li><NavLink to='/classes' className={({ isActive }) => isActive ? activeClasses : defaultClasses}>Class</NavLink></li>
    </>
    return (
        <header className='sphere-primary-bg'>
            <div className="navbar px-3 py-2 xl:px-0 xl:container mx-auto sphere-secondary">
                <div className="navbar-start">
                    <div className="dropdown static">
                        <label tabIndex={0} className="btn btn-ghost px-0 mr-2 lg:hidden">
                            <TbAlignLeft className='h-6 w-6' />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 px-2 py-8 left-2 right-2 shadow bg-base-100 rounded-box text-[#445760]">
                            {menuList}
                        </ul>
                    </div>
                    <Link to='/'>
                        <img className='w-14 md:w-28' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-1">
                        {menuList}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </header>
    );
};

export default Header;