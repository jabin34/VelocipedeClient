import React from 'react';
import { toast } from 'react-toastify';

const UserModal = ({modal,refetch,setModal}) => {
  const {email}=modal;
  const removeUser = (email) =>{
    console.log(email);
    
     fetch(`http://localhost:4000/user/${email}`,{
    method: "delete",
    headers: {
     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
})
.then(res=>res.json())
.then(data=>{
    console.log(data);
        refetch();
        setModal(null)
        toast.success('User deleted Successfully!!!'); }
)
}
    return (

    
        <div>
<input type="checkbox" id="user-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="user-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-sm font-bold justify-center">Are you sure deleting user <span className='text-blue-700'>{email}</span> ?</h3>
    <button  class="btn btn-xs bg-red-500 text-white border-0" onClick={()=>removeUser(email)} >Remove User</button>
  </div>
</div>
</div>
    );
};

export default UserModal;