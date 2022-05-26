import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const reviewsdata = reviews.slice(0, 4);
  useEffect(() => {
    fetch(`https://protected-cliffs-14570.herokuapp.com/review`, {
      method: "get",
      // headers: {
      //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      // },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setReviews(result);
      });
  }, []);

  return (
    <div className="my-24">
      <h3 className=" p-5 text-3xl font-bold">Reviews</h3>
      <div class="divider mb-4"></div>
      <div className="grid  grid-cols-1  md:grid-cols-4 g-4 my-36 mx-12 ">
        {reviewsdata.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
