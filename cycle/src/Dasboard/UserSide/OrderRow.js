import React from 'react';

const OrderRow = ({order,index}) => {
    const{name,img,desc,qnty,total } =order;
    let decLength = desc.length;
    return (
        <tr>
        <th>{index+1}</th>
        <td>{name}</td>
        <td>
        <div class="avatar">
  <div class="w-16 rounded">
     <img src={img}alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>

        </td>
        <td title={desc}>{decLength>20? desc.slice(0,20)+".......":desc}</td>
        <td>{qnty}</td>
        <td>{total}</td>
        <td><button class="btn btn-xs">Pay</button>
        <button class="btn btn-xs">Cancel</button>
        </td>
      </tr>
    );
};

export default OrderRow;