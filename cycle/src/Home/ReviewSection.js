import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';



const ReviewSection = () => {
    const [reviews,setReviews] = useState([]);
    const reviewsdata = reviews.slice(0,4);
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
           <h3 className='text-3xl p-5 '>Reviews</h3>
          <hr/>
           <div className='grid  grid-cols-1  md:grid-cols-4 g-4 '>
               
              {reviewsdata.map((review)=><ReviewCard key={review._id} review={review}/>)}
           </div>

        </div>
    );
};

export default ReviewSection;