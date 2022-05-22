import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import  svg from '../../src/assets/group-3.svg'
const Registration = () => {
    const {register,formState: { errors }, handleSubmit,} = useForm();
    const onSubmit = async(data) => {
        console.log(data);
       //  await createUserWithEmailAndPassword(data.email,data.password);
      //  await updateProfile({ displayName:data.name });
       
      };
    return (
        <div className=" flex h-screen justify-center items-center" style={{"background-image": `url(${svg})`}} alt="pic">
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-center text-2xl font-bold">Registration </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="your name...."
                class="input input-bordered w-full max-w-xs"
                {...register("name", { 
                    required:{
                        value:true,
                        message:"Name is Required."
                    }
                })}
              />
              <label class="label">
              {errors.name?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.name.message}</span>}
             

               
              </label>
            </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Enter your email</span>
                </label>
                <input
                  type="email"
                  placeholder="your email...."
                  class="input input-bordered w-full max-w-xs"
                  {...register("email", { 
                      required:{
                          value:true,
                          message:"Email is Required."
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: 'Provide a Valid Email' 
                      }})}
                />
                <label class="label">
                {errors.email?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' &&  <span class="label-text-alt text-red-500">{errors.email.message}</span>}
  
                 
                </label>
              </div>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="your password...."
                  class="input input-bordered w-full max-w-xs"
                  {...register("password", { 
                      minLength: {
                          value: 6,
                          message: 'must be 6 character' 
                        },
                      required:{
                          value:true,
                          message:"password is Required."
                      },
                      })}
                />
                <label class="label">
                {errors.password?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' &&  <span class="label-text-alt text-red-500">{errors.password.message}</span>}
  
                 
                </label>
              </div>
           
              
              <input type="submit" className="btn w-full max-w-xs text-white" value="Register" />
            </form>
            <p><small>Already have an acoount?<Link to="/login" className="text-secondary" > Login </Link></small>
            </p>
            <div className="divider">OR</div>
            <button
              class="btn btn-outline"
              onClick={() => {
                //signInWithGoogle();
              }}
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    );
};

export default Registration;