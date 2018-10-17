import React, { Component } from 'react';

class DisplayMessage extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: '',
            messages: []
        }
    }
   
    render() {
        return (
        <div>
            <h1>Type a new message</h1>
            <input type="text"/>
            <button type="button">Add Message</button>
            <ul></ul>
        </div>
        )
    }
}

export default DisplayMessage;