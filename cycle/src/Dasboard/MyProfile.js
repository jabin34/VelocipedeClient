import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import auth from "../firebse.init";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const { register, formState: { errors },  handleSubmit,reset,} = useForm();
  const {  data: userinfo, isLoading,refetch,} = useQuery("userDetails", () =>
    fetch(`http://localhost:4000/user/${user.email}`, {
      method: "get",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    console.log(userinfo);
    return <Loading />;
  }

  const onSubmit = async (data) => {
    const userdata = {
      education: data.education,
      adress: data.adress,
      phone: data.phone,
    };
    const url = `http://localhost:4000/user/${user.email}`;
    fetch(url, {
      method: "put",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(userdata),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        reset();
        refetch();
      });
    console.log(userdata);
  };
  return (
    <div>
     
      <h2>Update Profile</h2>
      <div class="card bg-base-100 shadow-xl ">
        <div class="card-body">
          <div class="avatar online">
            <div class="w-24 rounded-full">
              <img
                src="https://api.lorem.space/image/face?hash=28212"
                alt="hero"
              />
            </div>
          </div>
          <h2 class="card-title">{user?.displayName}</h2>
          <div>
            <p>Email:  {user?.email}</p>
            <p>Education: {userinfo?.education}</p>
            <p>Adress: {userinfo?.adress}</p>
            <p>Phone: {userinfo?.phone}</p>
            <p>Linkedin: </p>
            <label for="my-modal-3" class="btn  btn-sm">
              Update
            </label>
          </div>
          <div class="card-actions justify-center"></div>
        </div>
      </div>
      <input type="checkbox" id="my-modal-3" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="my-modal-3"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold">Update profile</h3>
          <div className="flex flex-col justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* name */}
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Education</span>
                </label>
                <input
                  type="text"
                  placeholder="your name...."
                  class="input input-bordered w-full "
                  {...register("education", {
                    required: {
                      value: true,
                      message: "Education is Required.",
                    },
                  })}
                />
                <label class="label">
                  {errors.name?.type === "required" && (
                    <span class="label-text-alt text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Adress</span>
                </label>
                <input
                  type="text"
                  placeholder="your adress...."
                  class="input input-bordered w-full "
                  {...register("adress", {
                    required: {
                      value: true,
                      message: "adress is Required.",
                    },
                  })}
                />
                <label class="label">
                  {errors.adress?.type === "required" && (
                    <span class="label-text-alt text-red-500">
                      {errors.adress.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="your adress...."
                  class="input input-bordered w-full "
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "phone is Required.",
                    },
                  })}
                />
                <label class="label">
                  {errors.phone?.type === "required" && (
                    <span class="label-text-alt text-red-500">
                      {errors.phone.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control w-full max-w-xs">
                <input
                  type="submit"
                  className="btn w-full max-w-xs text-white"
                  value="update"
                />
              </div>
            </form>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
