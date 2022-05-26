import React from 'react';

const BusinessSummary = () => {
    return (
        <div>
    <div class="hero min-h-screen" style={{"background-image": "url(https://i.ibb.co/Ss3G7J8/5570863.jpg)"}} >
  <div class=" bg-opacity-25"></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="">
      <h1 class="mb-36 text-5xl font-bold text-black">Millions People Trust Us </h1>
      {/* stat */}
      <div class="stats  stats-vertical lg:stats-horizontal shadow  ">
  
  <div class="stat w-100">
    <div class="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div class="stat-title">Users</div>
    <div class="stat-value ">25.6K</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div class="stat-title">Page Views</div>
    <div class="stat-value ">2.6M</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  
   
  <div class="stat">
    <div class="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div class="stat-title">New Registers</div>
    <div class="stat-value">1,200</div>
    <div class="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
    </div>
  </div>
</div>
 
        </div>
    );
};

export default BusinessSummary;