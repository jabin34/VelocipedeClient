import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from '../../Shared/Loading';

const AddProduct = () => {
    const { register,formState: { errors },handleSubmit,reset,} = useForm();
    
    //   const { data: tools, isLoading } = useQuery("addtools", () =>
    //     fetch("https://4000/addTools").then((res) =>
    //       res.json()
    //     )
    //   );
    //   if (isLoading) {
    //     return <Loading />;
    //   }
      const imageApiKey = "f310ed3e1d9d529e480b39eb2aa7d8fc";
      const onSubmit = async (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageApiKey}`;
        fetch(url, {
          method: "post",
          body: formData,
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.success) {
              const img = result.data.url;
              const tools = {
                name: data.name,
                quantity: data.quantity,
                price: data.price,
                img: img,
                minorder:data.minorder,
                available:data.available,
                desc:data.desc
              };
              fetch("http://localhost:4000/addTools", {
                method: "post",
                headers: {
                  "content-type": "application/json",
                  authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify(tools),
              })
                .then((res) => res.json())
                .then((inserted) => {
                  console.log(inserted);
                  if (inserted.insertedId) {
                    toast.success("tools added successfully!!!");
                    reset();
                  } else {
                    toast.error("Failed to add tool");
                  }
                });
            }
            console.log("imgdb", result);
          });
        console.log(data);
      };
    return (
        <div className='flex flex-col justify-center w-100'>
           <div className="mx-auto w-96">
           <p className='text-3xl p-3'>Add Products</p>
      <form onSubmit={handleSubmit(onSubmit)} >
           {/* name */}
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="your name...."
            class="input input-bordered w-full max-w-xs"
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required.",
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
         {/* desc */}
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Description</span>
          </label>
          <input
            type="text"
            placeholder="description...."
            class="input input-bordered w-full max-w-xs"
            {...register("desc", {
              required: {
                value: true,
                message: "Description is Required.",
              },
            })}
          />
          <label class="label">
            {errors.desc?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.desc.message}
              </span>
            )}
          </label>
        </div>
        {/* price */}
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Price</span>
          </label>
          <input
            type="number"
            placeholder="price...."
            class="input input-bordered w-full max-w-xs"
            {...register("price", {
              required: {
                value: true,
                message: "price is Required.",
              },
            })}
          />
          <label class="label">
            {errors.price?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.price.message}
              </span>
            )}
          </label>
        </div>
        {/* qty */} 
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Quantity</span>
          </label>
          <input
            type="number"
            placeholder="quantity...."
            class="input input-bordered w-full max-w-xs"
            {...register("quantity", {
              required: {
                value: true,
                message: "quantity is Required.",
              },
            })}
          />
          <label class="label">
            {errors.quantity?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.quantity?.message}
              </span>
            )}
          </label>
        </div>
        {/* minoder */} 
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Minimun Order</span>
          </label>
          <input
            type="number"
            placeholder="minorder...."
            class="input input-bordered w-full max-w-xs"
            {...register("minorder", {
              required: {
                value: true,
                message: "minorder is Required.",
              },
            })}
          />
          <label class="label">
            {errors.minorder?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.minorder?.message}
              </span>
            )}
          </label>
        </div>
       
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Photo</span>
          </label>
          <input
            type="file"
            class="input input-bordered w-full max-w-xs"
            {...register("image", {
              required: {
                value: true,
                message: "Image is Required.",
              },
            })}
          />
          <label class="label">
            {errors.image?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.image.message}
              </span>
            )}
          </label>
        </div>
 {/* available */} 
 <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Available</span>
          </label>
          <input
            type="number"
            placeholder="avaiable...."
            class="input input-bordered w-full max-w-xs"
            {...register("available", {
              required: {
                value: true,
                message: "available is Required.",
              },
            })}
          />
          <label class="label">
            {errors.available?.type === "required" && (
              <span class="label-text-alt text-red-500">
                {errors.available?.message}
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
    );
};

export default AddProduct;