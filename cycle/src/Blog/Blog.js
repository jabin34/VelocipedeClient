import React from 'react';

const Blog = () => {
    var coding =`{name:"samsung",price:60000},
    {name:"Apple watch",price:90000},
    {name:"vivo laptop",price:50000},
    {name:"MACBOOK PRO",price:120000},
    {name:"Oppo v12",price:20000},
    {name:"NOKIA n92",price:6000},
    {name:"huawei y6 phone",price:15000},`;
    var func =`{ var result =[];
        for( const product of products){
                if(product.name.includes(searchText)){
                    result.push(product);
                }
                
            }
            return result;}`;
    return (
        <div>
            <h1 className='text-3xl p-4' >Question & Answer</h1>
            <div className='p-4 grid grid-cols-1  md:grid-cols-3 gap-3'>
     {/* q1 */}
    <div class="card  bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title ">1.How will you improve the performance of a React Application?</h2>
    <p className='text-justify'>Keeping component state local where necessary.
Memoizing React components to prevent unnecessary re-renders.
Code-splitting in React using dynamic import(),
Windowing or list virtualization in React.
Lazy loading images in React.</p>
   
  </div>
   </div>
    {/* q2 */}
   <div class="card  bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">2.What are the different ways to manage a state in a React application?</h2>
    <p className='text-justify'>There are four main types of state you need to properly manage in your React apps:
Local state,
Global state,
Server state,
URL state.Local (UI) state – Local state is data we manage in one or another component.Global (UI) state – Global state is data we manage across multiple components.Server state – Data that comes.URL state – Data that exists on our URLs, including the pathname and query parameters.</p>
    
  </div>
   </div>
      {/* q3 */}
      <div class="card  bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title ">3. How does prototypical inheritance work?</h2>
    <p className='text-justify'>Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
   
  </div>
   </div>
     {/* q4 */}
     <div class="card  bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title ">4.Why you do not set the state directly in React?</h2>
    <p className='text-justify'>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
   
  </div>
   </div>
     {/* q5 */}
     <div class="card  bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title ">5.You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
    <p className=''>
    <code>  var products = [{coding}];
var searchProducts = productSearch(products,'laptop');
console.log(searchProducts);
function  productSearch(products, searchText){func}


    </code>
   
</p>
   
  </div>
   </div>
    {/* q6 */}
    <div class="card  bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title ">6.What is a unit test? Why should write unit tests?</h2>
    <p className='text-justify'>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
   
  </div>
   </div>
        </div>
        </div>

    );
};

export default Blog;