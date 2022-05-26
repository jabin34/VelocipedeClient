import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UserModal from './UserModal';

import UserRow from './UserRow';

const MakeAdmin = () => {
  const [modal,setModal]=useState(null);

    const {data: users, isLoading, refetch, } = useQuery("users", () =>
        fetch(`http://localhost:4000/user`, {
          method: "get",
           headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
           },
        }).then((res) => res.json())
      );
      if (isLoading) {
        console.log(users);
        return <Loading />;
      }
    return (
        <div className='p-5'>
           
            <div class="overflow-x-auto">
            <p className='text-3xl p-3'>All Users</p>
  <table class="table table-compact w-full">
  
    <thead>
      <tr>
        <th></th> 
        <th>Email</th> 
        <th>Role</th> 
        <th>Action</th> 
      </tr>
    </thead> 
    <tbody>

     {users.map((user,index)=>< UserRow key={user._id} user={user} index={index} refetch={refetch} setModal={setModal} />)}
     
     
      
      
    </tbody> 
    
  </table>
  {modal && <UserModal modal={modal} setModal={setModal} refetch={refetch}></UserModal>}
</div>

        </div>
    );
};

export default MakeAdmin;