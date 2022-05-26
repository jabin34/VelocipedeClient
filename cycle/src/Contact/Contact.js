import React from 'react';

const Contact = () => {
    return (
        
<div>
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Contact Us</h1>
      <p class="py-6">Swing by for a cup of coffee or Lets get in touch. Send us a message.</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Subject</span>
          </label>
          <input type="text" placeholder="subject..." class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Message</span>
          </label>
          <textarea type="text" placeholder="message....." class="input input-bordered" ></textarea>
         
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-base">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>
   
</div>
    );
};

export default Contact;