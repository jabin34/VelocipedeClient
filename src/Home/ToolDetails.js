import React from 'react';
import useTools from '../Hooks/useTools';
import SingleTool from './SingleTool';

const ToolDetails = () => {
    const[tools] = useTools();
    return (
        <div>
             <div class="hero min-h-screen bg-base-200">
  <div class="hero-content ">
   
    <div class="overflow-x-auto">
    <h3 className='text-3xl p-5 '>Tools</h3>
            <hr/>
        <div className='grid grid-cols-1 md:grid-cols-3 p-5'>
            {tools.map(part => <SingleTool part={part}/>)}
        </div>
   </div>
   
  </div>
</div>
        </div>
    );
};

export default ToolDetails;