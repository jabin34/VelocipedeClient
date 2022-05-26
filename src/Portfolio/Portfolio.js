import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
 <div>
 <div class="hero min-h-screen bg-base-200">
  <div class="m-3 ">
  <div class="flex flex-col md:flex-row  bg-base-100 shadow-xl">
  <figure className='sm:w-100 md:w-2/4'><img src="https://i.ibb.co/FKHvkpJ/profile.jpg"  className=' mask mask-parallelogram' alt="Album"/></figure>
  <div class="card-body  text-center">
    
    <div class="">
    <h2 class="card-title text-3xl">Israt Jabin</h2>
    <h2 className='card-title text-sm'> Software Engineer</h2>
    <h2 className='card-title text-sm'> Email:isratjabinesha@gmail.com</h2>
    <h2 className='card-title text-xs text-zinc-400'  >Contact:(+81)070 8492 1977</h2>
    <div class="divider"></div> 
    <h2 class="card-title text-2xl">Education</h2>
    <h2 className='card-title text-sm'>Bsc in Computer Science And Engineering</h2>
    <h2 className='card-title text-sm text-zinc-400'>Chittagong University</h2>
    <div class="divider"></div> 
    <div className='flex g-3 justify-around'>
        <Link to={''} ><img src='https://i.ibb.co/SBZwhnw/icons8-linkedin-2-48.png' className='w-18 mask mask-squircle' alt='fb'/></Link>
        <Link to={''}><img src='https://i.ibb.co/3CJXrKb/github.png' className='w-18' alt='fb'/></Link>
        <Link to={''}><img src='https://i.ibb.co/PN3StQX/facebook.png' className='w-18' alt='fb'/></Link>
    </div>
    </div>
  </div>
  </div>

  </div>
  
</div>
<div className='p-4'>
    <h2 className='text-3xl py-2  '>Work Expericence</h2>
    <div class="divider"></div> 
<div className='mt-4 flex flex-col md:flex-row  justify-around'>
<div class="  bg-base-100 shadow-xl mt-1 ">
 
  <div class="card-body">
    <h2 class="card-title"> 株式会社SIG</h2>
    <p className='card-title text-sm'>Software Engineer (Jan 2021 - Present)</p>
    <div class="card-actions text-sm ">
   Tokyo,Japan
    </div>
  </div>
</div>

<div class="  bg-base-100 shadow-xl mt-1">
  
  <div class="card-body">
    <h2 class="card-title"> AGAMiLabs Limited</h2>
    <p className='card-title text-sm'> Software Engineer (Jan 2018 - Sep 2019)</p>
    <div class="card-actions text-sm ">
    Chittagong, Bangladesh
    </div>
  </div>
</div>
</div>
</div>
<div className='m-4'>
<h2 className='text-3xl py-2 '>Technology</h2>
<div class="divider"></div> 
<div class="grid grid-cols-4 gap-4">
    <div className='border border-orange-200 p-4 shadow-sm rounded'>HTML</div>
    <div className='border border-orange-200 p-4 shadow-sm rounded'>CSS</div>
    <div className='border border-orange-200 p-4 shadow-sm rounded'>JavaScript</div>
    <div className='border border-orange-200 p-4 shadow-sm rounded'>React.js</div>
    <div className='border border-orange-200 p-4 shadow-sm rounded'>Node.js</div>
    <div className='border border-orange-200 p-4 shadow-sm rounded'>Express.js</div>
    <div className='border border-orange-200 p-4 shadow-sm rounded'>Php</div>
    <div className='border border-orange-200 p-4 shadow-sm rounded'>Laravel</div>
    <div className='border border-orange-200 p-4 shadow-sm rounded'>SCSS</div>
    <div className='border border-orange-200 p-4 shadow-sm rounded'>Daisy UI</div>
    <div className='border border-orange-200 p-4 shadow-sm rounded'>Tailwind</div>
    <div className='border border-orange-200 p-4 shadow-sm rounded'>SpringBoot</div>
    
</div>
</div>
<div className=''>
<h2 className='text-3xl py-2 '>My Recent Projects</h2>
<div class="divider"></div> 
<div className='grid  grid-cols-1  md:grid-cols-3 gap-4 justify-items-center mt-36 mb-36'>
 <div className='border  shadow-sm rounded p-4 w-100'><iframe  src="https://wirehouse-e5bc6.web.app/" ></iframe>
 <a href='https://wirehouse-e5bc6.web.app/' target='blank' className='btn btn-xs m-1'>Link</a>
 </div> 
<div className='border   shadow-sm rounded p-4 w-100'><iframe src="https://todoapp-b7e2b.web.app/"></iframe>
<a href='https://todoapp-b7e2b.web.app/' target='blank' className='btn btn-xs m-1'>Link</a>
</div> 
<div className='border   shadow-sm rounded p-4 w-100'><iframe src="https://homefoodie-b9dde.web.app/"></iframe>
<a href='https://homefoodie-b9dde.web.app/' target='blank' className='btn btn-xs m-1'>Link</a>
</div> 
</div>

</div>
</div>
    );
};

export default Portfolio;