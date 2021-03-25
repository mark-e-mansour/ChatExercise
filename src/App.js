import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindows from './ChatWindows'

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

const messages = [
  { username: 'Amy', text: 'Hi, Jon!' },
  { username: 'Amy', text: 'How are you?' },
  { username: 'John', text: 'Hi, Amy! Good, you?' },
];

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  state = {
  messages: messages
  }

submitMessage = (message) => {
        this.setState((currentState) => ({
          messages: currentState.messages.concat([message])
        }))
  }

  render() {
   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
    		{users.map((user) => (
            <ChatWindows key={user.username} messages={this.state.messages} username={user.username} onSubmitMessage = {this.submitMessage}/>
            ))}
          
        </div>
      </div>
    );
  }
}

export default App;
