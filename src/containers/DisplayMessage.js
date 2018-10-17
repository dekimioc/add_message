import React, { Component } from 'react';

class DisplayMessage extends Component {
    constructor(props){
        super(props);
        this.state = {
            input: '',
            messages: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }

    submitMessage() {
        this.setState(({messages, input}) => ({ 
          input: "",
          messages: [...messages, input]
        }))
      }
   
    render() {
        return (
        <div>
            <h1>Type a new message</h1>
            <input type="text" onChange={this.handleChange} value={this.state.input}/>
            <button type="button" onClick={this.submitMessage}>Add Message</button>
            <ul>{this.state.messages.map(msg => (<li>{msg}</li>))}</ul>
        </div>
        )
    }
}

export default DisplayMessage;