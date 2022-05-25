import React from 'react';

const ReviewCard = ({review}) => {
   
    

  return (
        
  <div class="card   bg-base-100 shadow-xl p-5 m-4" >
  <div class="">
    <div class=" ">
    <p className='text-2xl'>{review.name}</p>
    <p>{review.comment}</p>
    <p>Rating: {review.rating}</p>

   
<div class="rating">

    {/* <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" />
    <input type="radio" name="rating-4" class="mask mask-star-2 bg-green-500" /> */}

</div>
    </div>
    
  </div>
</div>
       
    );
};

export default ReviewCard;