import React from 'react';

const ManageOrderRow = ({order,index,refetch}) => {
    const{_id,name,img,desc,qnty,total,email,paid,shipped} = order;
    let decLength = desc.length;
    const changeOderStatus = (id)=>{
    alert(id);
    fetch(`http://localhost:4000/shippedorder/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
     //payment),
    })
      .then((res) => res.json())
      .then((data) => {
       refetch();
        console.log(data);
      });

    }

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
        <td> {(paid && !shipped) && <button class="btn btn-xs btn-warning text-white" onClick={()=>{changeOderStatus(_id)}}>Pending</button>}
         {(paid && shipped )&& <button class="btn btn-xs btn-success text-white">Shipped</button>}
              {!paid && <button class="btn btn-xs">Not paid</button>}
        </td>
      </tr>
    );
};

export default ManageOrderRow;