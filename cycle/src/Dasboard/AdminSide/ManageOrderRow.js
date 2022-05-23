import React from 'react';

const ManageOrderRow = ({order,index}) => {
    const{name,img,desc,qnty,total,email } = order;
    let decLength = desc.length;
    return (
        <tr>
        <th>{index+1}</th>
        <td>{email}</td>
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
        <td><button class="btn btn-xs">Pay</button></td>
      </tr>
    );
};

export default ManageOrderRow;