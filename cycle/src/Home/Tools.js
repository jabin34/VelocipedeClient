import React from 'react';
import useTools from '../Hooks/useTools';
import SingleTool from './SingleTool';

const Tools = () => {
    const[tools] = useTools();
    const toolsData = tools.slice(0,6);
    return (
        <div>
            <h3 className='text-3xl p-5 font-bold '>Tools</h3>
            <div class="divider"></div> 
        <div className='grid grid-cols-1 md:grid-cols-3 p-5'>
            {toolsData.map(part => <SingleTool part={part}/>)}
        </div>
        </div>
       
    );
};

export default Tools;