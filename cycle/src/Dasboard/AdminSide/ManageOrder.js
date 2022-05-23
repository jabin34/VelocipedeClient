import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import ManageOrderRow from './ManageOrderRow';

const ManageOrder = () => {
    const {
        data: orders, isLoading } = useQuery("ordersDetais", () =>
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
            manage order {orders.length}
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
    <tr>
        <th></th>
        <th>Email</th>
        <th>Product</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>
        <th>Action</th>
        <th>Status</th>
      
      </tr>
    </thead>
    <tbody>
     
      {orders.map((order,index)=><ManageOrderRow key={order._id} order={order} index={index}/>)}
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageOrder;