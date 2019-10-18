import React, { Component } from 'react';
import PodComponent from './PodComponent';

class PodListComponent extends Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            pods: props.pods
        }
    }

    render() {
        console.log(this.state)
        return (
            <div>
                                <ul>
                                {this.props.pods.map((value,index) => {
                                    console.log(value)
                                    return <li key={index}><PodComponent pod={value}/></li>
                                })}
                            </ul>


            </div>
        );
    }
}

export default PodListComponent;