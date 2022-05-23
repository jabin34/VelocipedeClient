import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

import UserRow from './UserRow';

const MakeAdmin = () => {

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

     {users.map((user,index)=>< UserRow key={user._id} user={user} index={index} refetch={refetch} />)}
     
     
      
      
    </tbody> 
    
  </table>
</div>

        </div>
    );
};

export default MakeAdmin;