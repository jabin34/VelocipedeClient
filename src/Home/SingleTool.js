import React from "react";
import {  useNavigate } from "react-router-dom";

const SingleTool = ({ part }) => {
    const navigate = useNavigate();
    const{_id,name,img,desc,price,minorder,available}=part;
    const purchase=(id)=>{
     navigate(`/purchase/${id}`);
    }
  return (
    <div className="m-3 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 ">  
      <div class="card bg-base-100 shadow-xl">
        <figure>
          <img
          
            src={img} width={300} height={200}
            alt="pic"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
           {name}  
          </h2>
          <p className="card-actions justify-start text-sm text-justify ">{desc}</p>
          <div class="card-actions justify-center ">
            <div class="badge badge-outline">Price: ${price}</div>
            <div class="badge badge-outline">Min Order: {minorder}</div>
            <div class="badge badge-outline">Avaiable: {available}</div>
          </div>
         <div > <button class="btn btn-warning text-white m-2 btn-sm " onClick={()=>purchase(_id)}>Book Order</button></div>
        </div>
       
      </div>
     
    </div>
  );
};

export default SingleTool;
