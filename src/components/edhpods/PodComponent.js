import React from 'react';



function PodComponent(props) {
    const {pod} = props
    return (
        <>
            {pod.map( player => {
                return (<h4>
                    {player}
                </h4>)
            })}
        </>
    )
}

export default PodComponent;