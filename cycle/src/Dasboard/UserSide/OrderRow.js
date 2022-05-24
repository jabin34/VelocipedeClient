import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({order,index}) => {
    const{_id,name,img,desc,qnty,total ,paid} =order;
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
        <td>
       {(total && !paid) &&<><Link to={`/dashboard/payment/${_id}`}> <button class="btn btn-xs">Pay</button></Link> <button class="btn btn-xs btn-warning text-white">Cancel</button></> }
       {(total && paid) &&  <span class="btn btn-xs btn-success text-white ">Paid</span> }
        
        </td>
      </tr>
    );
};

export default OrderRow;