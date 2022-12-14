import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebse.init';
import Loading from '../../Shared/Loading';
import {toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import OrderRow from './OrderRow';
import OrderDeleteModal from './OrderDeleteModal';

const MyOrder = () => {
    const[user]= useAuthState(auth);
    const navigate = useNavigate();
    const [modal,setModal]=useState(null);
    const email = user?.email;
    const {data: myorders, isLoading ,refetch} = useQuery("myorderDetais", () =>
        fetch(`http://localhost:4000/order/${email}`, {
          method: "get",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
           },
        }).then((res) =>{ 
            if(res.status === 401 || res.status === 403 ){
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/home');
            }
            console.log(res);
           return res.json()})
      );
      if (isLoading) {
        console.log(myorders);
        return <Loading/>;
      }

    return (
        <div className='m-3' >
          <p className='text-3xl'> Total  order :{myorders?.length}</p> 
            <div class="overflow-x-auto">
  <table class="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Image</th>
        <th>Description</th>
        <th>Quantity</th>
        <th>Total</th>      
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    
     {myorders.map((order,index)=><OrderRow key={order._id} order={order} index={index} refetch={refetch} setModal={setModal}/>)}
     
      
    </tbody>
  </table>
</div>
{modal &&<OrderDeleteModal  modal={modal} setModal={setModal}refetch={refetch} />}
        </div>
    );
};

export default MyOrder;