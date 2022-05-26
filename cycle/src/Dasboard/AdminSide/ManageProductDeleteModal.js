import React from 'react';
import { toast } from 'react-toastify';

const ManageProductDeleteModal = ({modal,setModal,refetch}) => {
const {_id,name}=modal;

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
            refetch();
           setModal(null);}
        )
    }

    return (
        <div>
    <input type="checkbox" id="product-delete" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="product-delete" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to delete? {name}{" "}
          </h3>
          <button class="btn btn-xs" onClick={()=>deleteHandle(_id)}>Delete</button>
          <label for="product-delete" class="btn btn-xs">
              Cancel
        </label>
    
  </div>
</div>
        </div>
    );
};

export default ManageProductDeleteModal;