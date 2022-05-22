import React from 'react';
import useTools from '../Hooks/useTools';

const Tools = () => {
    const[tools] = useTools();
    return (
        <div>
            {tools.length}
        </div>
    );
};

export default Tools;