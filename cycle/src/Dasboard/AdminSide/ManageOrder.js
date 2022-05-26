import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

import ManageOrderRow from './ManageOrderRow';

const ManageOrder = () => {

    const {
        data: orders, isLoading,refetch } = useQuery("ordersDetais", () =>
        fetch(`http://localhost:4000/order`, {
          method: "get",
        //   headers: {
        //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        //   },
        }).then((res) => res.json())
      );
      if (isLoading) {
        console.log(orders);
        return <Loading/>;
      }
   
    return (
        <div>
          
  <div class="overflow-x-auto">
  <p className='text-3xl p-3'>Manage Order</p>
  <table class="table w-full">
   
    <thead>
    <tr>
        <th></th>
        <th>Email</th>
        <th>Product</th>
        <th>Image</th>
        <th>Description</th>
        <th>Price</th>
        <th>Total</th>
        <th>Status</th>
      
      </tr>
    </thead>
    <tbody>
     
      {orders.map((order,index)=><ManageOrderRow key={order._id} order={order} index={index} refetch={refetch}/>)}
      
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default ManageOrder;