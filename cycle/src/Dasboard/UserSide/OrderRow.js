import React from 'react';

const OrderRow = ({order,index}) => {
    const{name,img,desc,qnty,total } =order;
    return (
        <tr>
        <th>{index}</th>
        <td>{name}</td>
        <td>
        <div class="avatar">
  <div class="w-16 rounded">
     <img src={img}alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>

        </td>
        <td>{desc}</td>
        <td>{qnty}</td>
        <td>{total}</td>
        <td><button class="btn btn-xs">Pay</button></td>
      </tr>
    );
};

export default OrderRow;