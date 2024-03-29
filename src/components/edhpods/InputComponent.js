import React, { Component } from 'react';

class InputComponent extends Component {

    constructor(props){
        super(props);
        this.state = {handleSubmit: props.handleSubmit}
        this.handleSub = this.handleSub.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
    }

    handleSub(event){
        event.preventDefault()
        this.state.handleSubmit(this.state.name)
        this.setState({name:""})
    }

    handleTextChange(event){
        this.setState({name: event.target.value})
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSub}>
                    <label>Name:<input type="text" name="name" className="form-control-plaintext" onChange={this.handleTextChange} value={this.state.name}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default InputComponent;