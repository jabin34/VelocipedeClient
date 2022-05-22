import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import  svg from '../../src/assets/group-3.svg'
import SocialLogin from '../Shared/SocialLogin';
import { useSignInWithEmailAndPassword,useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebse.init';
import Loading from '../Shared/Loading';
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const {register,formState: { errors }, handleSubmit,} = useForm();
    if(loading || gloading ){
      return <Loading/>;
    }
    let signInErrMsg ;
  if(error || gerror ){
    signInErrMsg = <p className="text-red-500"><small>{error?.message || gerror?.message }</small></p>;
  }
  let from = location.state?.from?.pathname ||'/';
  if (guser||user) {
    navigate(from,{replace:true});
  }

    const onSubmit = (data) => {
        
        console.log(data);
        signInWithEmailAndPassword(data.email,data.password);
      };
    return (
        <div className=" flex h-screen justify-center items-center" style={{"background-image": `url(${svg})`}}>
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="text-center text-2xl font-bold">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
           
              {signInErrMsg}
              <input type="submit" className="btn w-full max-w-xs bg-blue-700 border-0 text-white" value="Login" />
            </form>
            <p><small>New to Cycle?<Link to="/registration" className="text-secondary" > Create New Account</Link></small>
            </p>
            <p><small>Forgot Password?<Link to="/" className="text-secondary">Reset Password</Link></small>
            </p>
            <div className="divider">OR</div>
            <button
              class="btn btn-outline"
              onClick={() => {
                signInWithGoogle();
              }}
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    );
};

export default Login;