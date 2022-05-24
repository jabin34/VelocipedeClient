import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebse.init';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const[user] = useAuthState(auth);
    const[admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle p-3" />
        <div class="drawer-content   ">
            <h3 className='text-3xl'>Dashboard</h3>
        <Outlet></Outlet>
          
        
        </div> 
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">

            <li><Link to="/dashboard">Profile</Link></li>
          {!admin && <> <li><Link to="/dashboard/order">My Order</Link></li>
            <li><Link to="/dashboard/review"> Add Review</Link></li>
            </>
            }
            { admin && <>
               <li><Link to="/dashboard/manageOrder">Manage Order</Link></li>
               <li><Link to="/dashboard/manage">Manage Products</Link></li>
               <li><Link to="/dashboard/addProduct">Add product</Link></li>
                <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
           </>}
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;