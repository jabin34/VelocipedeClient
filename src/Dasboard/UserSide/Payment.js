import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1A8tGfA59tBHHEj9LE0MUevXZgBJ16CVheHhYHMQ16gcMATD7YIFKvGuTTruostHp2emJP8hOBkN2qE6GJhAQc0061pusAy1"
);
const Payment = () => {
  const { id } = useParams();
  const url = `https://protected-cliffs-14570.herokuapp.com/particularOrder/${id}`;
  const { data: payorder, isLoading } = useQuery(["singleorder", id], () =>
    fetch(url, {
      method: "get",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    console.log(payorder);
    return <Loading />;
  }
  return (
    <div>
      {id}
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <div class="card w-11/12  md:w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <h2 class="text-2xl">Hello ! {payorder.user} </h2>

              <p className="text-3xl text-gray-800">
                Total Bill: ${payorder.total}
              </p>
              <p>Pay for {payorder.name} </p>
            </div>
          </div>

          {/* payment  */}
          <div class="card  w-11/12  md:w-96 bg-base-100 shadow-xl">
            <div class="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm payorder={payorder} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
