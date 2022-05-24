import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';



const ReviewSection = () => {
    const [reviews,setReviews]=useState([]);
useEffect(()=>{
    fetch(`http://localhost:4000/review`, {
        method: "get",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json())
      .then(result=>{
        console.log(result);
        setReviews(result);
      });
  
},[]);

    
 
  
    return (
        <div>
           <h3>Reviews</h3>
           <div className='grid  grid-cols-1  md:grid-cols-3 g-4 '>
               
              {reviews.map((review)=><ReviewCard key={review._id} review={review}/>)}
           </div>

        </div>
    );
};

export default ReviewSection;