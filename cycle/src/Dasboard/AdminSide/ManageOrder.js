import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

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
        </div>
    );
};

export default ManageOrder;