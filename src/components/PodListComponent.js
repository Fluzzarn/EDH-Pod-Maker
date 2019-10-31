import React, { Component } from 'react';
import PodComponent from './PodComponent';

class PodListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pods: props.pods
        }
    }

    render() {
        return (
            <div className="row">
                    {this.props.pods.map((value,index) => {
                        
                        return (
                            <div className='col' key={index}>
                            <h2>Pod {index + 1}</h2>
                            <br/>
                            <PodComponent pod={value}/> 
                            </div>

                        )
                    })}
            </div>
        );
    }
}

export default PodListComponent;