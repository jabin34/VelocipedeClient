import React from 'react';

const UserModal = ({user,removeUser}) => {
    return (
        <div>
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-sm font-bold justify-center">Are you sure deleting user <span className='text-blue-700'>{user.email}</span> ?</h3>
    <button  class="btn btn-xs bg-red-500 text-white border-0" >Delete</button>
  </div>
</div>
</div>
    );
};

export default UserModal;