import React from 'react';

const UserRow = ({user,index}) => {
    return (
      
     <tr>
      <th>{index + 1}</th>
      <td>{user.email}</td>
      <td>
        
          <button class="btn btn-xs" >
            Make Admin
          </button>
        
      </td>
      <td>
        <button class="btn btn-xs bg-red-500 text-white border-0">Remove User</button>
      </td>
    </tr>
        
    );
};

export default UserRow;