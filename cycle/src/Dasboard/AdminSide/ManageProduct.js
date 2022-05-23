import React from 'react';
import useTools from '../../Hooks/useTools';
import ItemTr from './ItemTr';

const ManageProduct = () => {
    const [tools ] = useTools();
   return(    
  <div>
 <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Image</th>
        <th>Description</th>
        <th>Price</th>
        <th>Min Order</th>
        <th>Available</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
        tools.map((item,index)=><ItemTr key={item._id} item={item} index={index}/>)
    }
      
     
    </tbody>
  </table>
</div> 
</div>
 
)};

export default ManageProduct;