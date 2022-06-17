import React from 'react';
import {useDrag} from 'react-dnd';

function Picture({id, url, Picture}) {
        const[{isDragging}, drag] = useDrag(() => ({
            type: "image",
            item: {id: id},
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging(),
            }),
        }));
    return (
        <>
            <img 
                ref={drag}
                src={url} 
                width="150px" 
                alt="url"
                style={{border: isDragging ? "5px solid pink" : "0px"}} />
        </>
    )
}

export default Picture;