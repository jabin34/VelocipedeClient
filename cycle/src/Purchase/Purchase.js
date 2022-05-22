import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const[data,setData] = useState();
    const {id} = useParams();
    const url =`http://localhost:4000/tools/${id}`;
fetch(url)
.then(res=>res.json())
.then(item=>{
    setData(item);
    console.log(item);
});


    return (
        <div>
        <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src={data?.img}  alt="pic"/>
    <div>
      <h1 class="text-5xl font-bold">{data?.name}</h1>
      <p class="py-6">{data?.desc}</p>
      <p class="py-6">Avaiable:{data?.available}</p>
      <p class="py-6">Minimum order:{data?.minorder}</p>
     
      <input type="number"  class="input input-bordered input-md w-full max-w-xs text-black" />
      <button class="btn btn-primary mx-2">Quantiy</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Purchase;