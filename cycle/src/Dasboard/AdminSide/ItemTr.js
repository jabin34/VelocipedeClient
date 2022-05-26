import React from 'react';

import {toast } from 'react-toastify';
const ItemTr = ({item,index,setModal}) => {
    const{_id,name,img,desc,price,quantity,available,minorder} = item;
    let decLength = desc.length;
  
    return (
        <tr>
        <td>{index+1}</td>
        <td>{name}</td>
        <td><div class="avatar">
                <div class="w-16 rounded">
                    <img src={img}alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div>
       </td>
        <td title={desc}>{decLength>20? desc.slice(0,20)+".......":desc}</td>
        <td>{price}</td>
        <td>{minorder}</td>
        <td>{available}</td>
        
        <td> <label for="product-delete" class="btn btn-xs"onClick={()=>setModal(item)} >Delete</label>
           </td>
      </tr>
    );
};

export default ItemTr;