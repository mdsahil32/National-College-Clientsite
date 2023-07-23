import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/Authprovider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOption = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/college'}>Colleges</Link></li>
        <li><Link to={'/admission'}>Admission</Link></li>
        <li><Link to={'/myCollege'}>My College</Link></li>
        {
            user ? <> <li><Link to={'/profile'}>{user.displayName}</Link></li> <li><Link onClick={handleLogout}>Logout</Link></li></> : <li><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOption}
                    </ul>
                </div>
                <h3 className='text-2xl font-semibold'>National Colleges</h3>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {navOption}
                </ul>
            </div>
        </div>
    );
};

export default Header;