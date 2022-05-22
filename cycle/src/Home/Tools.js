import React from 'react';
import useTools from '../Hooks/useTools';
import SingleTool from './SingleTool';

const Tools = () => {
    const[tools] = useTools();
    return (
        <div>
            <h3 className='text-3xl'>Tools</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 p-5'>
            {tools.map(part => <SingleTool part={part}/>)}
        </div>
        </div>
       
    );
};

export default Tools;