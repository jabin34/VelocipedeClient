import React from 'react';
import family from '../../src/assets/bicycle.jpeg';
const Banner = () => {
    return (
 <div class="relative text-center">
  <img src={family} alt='banner'/>
  <div class="container absolute top-10 left-10 hidden md:inline">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="m-b-20 text-6xl text-white"><strong className=''>#1 supplier of cycle<br/>parts in  Bangladesh</strong></h1>
                    <p class="m-b-40 text-white">Innovative Solutions. We Sell, You Decide. Choose one.</p>
                    <p className='flex justify-center'><p class="btn btn-warning text-white btn-sm m-1 ">Shop Retail</p><p class=" btn btn-red-500 btn-sm m-1" >Buy Wholesale</p></p>
                </div>
            </div>
        </div>
</div>
    );
};

export default Banner;