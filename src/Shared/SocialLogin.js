import React from 'react';

const SocialLogin = () => {
  const  signInWithGoogle=()=>{

  }
    return (
       
            <button
            class="btn btn-outline"
            onClick={() => {
              signInWithGoogle();
            }}
          >
            Continue with Google
          </button>
       
    );
};

export default SocialLogin;