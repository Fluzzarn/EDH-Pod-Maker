import React, { Component } from 'react';

class PodComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pod: props.pod
        }
    }
    
    render() {
        return (
            <div>
                {this.state.pod.map((value,index) => {
                    console.log(value)
                                    return value+', '
                })}
                </div>
        );

    }
}

export default PodComponent;