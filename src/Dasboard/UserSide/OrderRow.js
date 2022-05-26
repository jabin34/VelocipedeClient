import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import OrderDeleteModal from './OrderDeleteModal';

const OrderRow = ({order,index,refetch,setModal}) => {
  
    const{_id,name,img,desc,qnty,total ,paid,transactionId} = order;
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
       {(total && !paid) &&<><Link to={`/dashboard/payment/${_id}`}> <button class="btn btn-xs">Pay</button>
       </Link> 
       <label for="my-modal-3" class="btn btn-xs"onClick={()=>setModal(order)} >Delete</label>
      </> }
       {(total && paid) && <div>
          <span class="btn btn-xs btn-success text-white ">Paid</span>
          <p className='text-sm text-bold'> Tansaction Id: {transactionId}</p>
          </div> }
           
        </td>

      
        



      </tr>
    );
};

export default OrderRow;