import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebse.init';
import logo from'../../src/assets/bicyclelogo.png';
const Header = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    navigate('/login');
    localStorage.removeItem('accessToken');
    
  };

    const navList = <>
     <li><Link to='/home'>Home</Link></li>
     <li><Link to='/blog'>Blog</Link></li>
     <li><Link to='/details'>Purchase</Link></li>
     <li><Link to='/dashboard'>Dashboard</Link></li>
     <li><Link to='/portfolio'>Portfolio</Link></li>
    
    
    </>;
    return (
        <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabindex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      
      <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navList}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">
      <img src={logo}  className="w-8" height={30} alt='logo' />Velocipede</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    {navList}
    </ul>
  </div>
  <div className="navbar-end">
    {
     user?<Link to='/portfolio' className='px-2' title={user.displayName} >{user?.displayName?.split(' ')[0]} </Link>:''
    }
    {
      user?<div className="btn btn-xs" onClick={logout}>Logout</div>: <Link to="/login" className="btn btn-xs">Login</Link>
    }
   <label for="my-drawer-2"  className="btn btn-ghost lg:hidden">
   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
   </label>
  </div>
</div>
        </div>
    );
};

export default Header;