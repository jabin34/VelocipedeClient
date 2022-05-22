import React from "react";
import { Navigate } from "react-router-dom";

const SingleTool = ({ part }) => {
    const{id,name,img,desc,price,quantity,available}=part;
    const purchase=(id)=>{
     Navigate('/')
    }
  return (
    <div className="m-3">  
      <div class="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
           {name}
           
          </h2>
          <p className="card-actions justify-start">{desc}</p>
          <div class="card-actions justify-center">
            <div class="badge badge-outline">price: ${price}</div>
            <div class="badge badge-outline">Quantity:{quantity}</div>
            <div class="badge badge-outline">Avaiable:{available}</div>
          </div>
         <div > <button class="btn btn-outline btn-info " onClick={()=>purchase(id)}>Book Order</button></div>
        </div>
       
      </div>
     
    </div>
  );
};

export default SingleTool;
