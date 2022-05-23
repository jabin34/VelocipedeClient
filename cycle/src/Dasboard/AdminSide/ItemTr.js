import React from 'react';

import {toast } from 'react-toastify';
const ItemTr = ({item,index}) => {
    const{_id,name,img,desc,price,quantity,available,minorder}= item;
    let decLength = desc.length;
    const deleteHandle = (id)=>{
        
        fetch(`http://localhost:4000/tools/${id}`,{
            method: "delete",
            headers: {
             authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
                  toast.success('product data deleted Successfully!!!'); }
        )
    }
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
        
        <td> <button class="btn btn-xs" onClick={()=>deleteHandle(_id)}>Delete</button></td>
      </tr>
    );
};

export default ItemTr;