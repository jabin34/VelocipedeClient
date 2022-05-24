import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebse.init';

const AddReview = () => {
    const { register, formState: { errors },  handleSubmit,reset,} = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = async (data) => {

        const review ={
         "name":user?.displayName,
          "email":user?.email, 
          "comment":data.comment,
          "rating":data.rating
        };
        fetch('http://localhost:4000/review', {
            method: "post",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(review),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              reset();
              alert('added');
             
            });
        
        console.log(review);
    };
    return (
        <div>
<div class="card  bg-base-100 shadow-xl m-5">
  <div class="card-body ">
    <h2 class="card-actions justify-center text-3xl">Add Review</h2>
   
    <div class="grid  mx-auto w-3/4 md:w-80">
    <form onSubmit={handleSubmit(onSubmit)} >
              {/* name */}
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Comment</span>
                </label>
                <input
                  type="text"
                  placeholder="your name...."
                  class="input input-bordered w-full "
                  {...register("comment", {
                    required: {
                      value: true,
                      message: "comment is Required.",
                    },
                  })}
                />
                <label class="label">
                  {errors.comment?.type === "required" && (
                    <span class="label-text-alt text-red-500">
                      {errors.comment.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Rating</span>
                </label>
                <input
                  type="number" min={0} max={5}
                  placeholder="rating...."
                  class="input input-bordered w-full "
                  {...register("rating", {
                    required: {
                      value: true,
                     
                      message: "rating is Required.",
                    },
                  })}
                />
                <label class="label">
                  {errors.rating?.type === "required" && (
                    <span class="label-text-alt text-red-500">
                      {errors.rating.message}
                    </span>
                  )}
                </label>
                
              </div>
              <div class="form-control w-full max-w-xs">
                <input
                  type="submit"
                  className="btn w-full max-w-xs text-white"
                  value="Add"
                />
              </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddReview;