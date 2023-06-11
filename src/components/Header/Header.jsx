import React from 'react';
import logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { TbAlignLeft } from 'react-icons/tb'
import useAuth from '../../hooks/useAuth';
import useUserRole from '../../hooks/useUserRole';

const Header = () => {
    const { user, logOut } = useAuth();
    const [userRole] = useUserRole();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const defaultClasses = 'text-lg px-8 py-2 hover:bg-[#ECF8F9] hover:text-[#445760] font-medium rounded-none';
    const activeClasses = 'text-lg px-8 py-2 !bg-[#ECF8F9] sphere-primary font-medium rounded-none';
    const menuList = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? activeClasses : defaultClasses}>Home</NavLink></li>
        <li><NavLink to='/instructors' className={({ isActive }) => isActive ? activeClasses : defaultClasses}>Instructors</NavLink></li>
        <li><NavLink to='/classes' className={({ isActive }) => isActive ? activeClasses : defaultClasses}>Classes</NavLink></li>
        {
            user && <li><NavLink to={
                userRole.role === 'student' && '/dashboard/selected-classes' ||
                userRole.role === 'instructor' && '/dashboard/my-classes' ||
                userRole.role === 'admin' && '/dashboard/manage-classes'
            } className={({ isActive }) => isActive ? activeClasses : defaultClasses}>Dashboard</NavLink></li>
        }
    </>
    return (
        <header className='sphere-primary-bg'>
            <div className="navbar px-3 py-2 xl:px-0 xl:container mx-auto sphere-secondary">
                <div className="navbar-start">
                    <div className="dropdown static">
                        <label tabIndex={0} className="btn btn-ghost px-0 mr-2 lg:hidden">
                            <TbAlignLeft className='h-6 w-6' />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 px-2 py-8 left-2 right-2 shadow bg-base-100 rounded-box text-[#445760] !z-10">
                            {menuList}
                        </ul>
                    </div>
                    <Link to='/'>
                        <img className='w-16 md:w-28' src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-1">
                        {menuList}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <button onClick={handleLogOut} className='text-lg mr-8 font-medium rounded-none'>LogOut</button>
                                <img className='w-14 h-14 rounded-full object-cover' src={user.photoURL} alt={user.displayName} />
                            </>
                            : <div>
                                <Link to='/registration' className='text-lg px-5 py-2 hover:bg-[#ECF8F9] hover:text-[#445760] font-medium rounded-none'>Sign Up</Link>
                                <Link to='/login' className='text-lg px-5 py-2 hover:bg-[#ECF8F9] hover:text-[#445760] font-medium rounded-none'>Sign In</Link>
                            </div>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;