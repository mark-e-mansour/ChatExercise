import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LoadMessages from './LoadMessages'
import serializeForm from 'form-serialize'

class ChatWindows extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired,
    messages: PropTypes.array.isRequired,
    onSubmitMessage: PropTypes.func.isRequired
  }
  state = {
    inputIsEmpty: true,
    text: ''
  }

updateButton = (text) => {
    this.setState(() => ({
      inputIsEmpty: text === '' ? true : false,
      text: text.trim()
    }))
  }

 handleSubmit = (e) => {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })

    if (this.props.onSubmitMessage) {
      this.props.onSubmitMessage(values)
    }
   
   this.setState(() => ({
      inputIsEmpty: true,
      text: ''
    }))
   
  }

render () {
  const { messages, username } = this.props

return (
  <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{username}</div>
			<LoadMessages messages={messages} username={username}/>

            <div>
              <form className="input-group" onSubmit={this.handleSubmit}>
				<input type='hidden' name='username' value={username} />
                <input name="text" type="text" onChange={(event) => this.updateButton(event.target.value)} className="form-control" placeholder="Enter your message..." value={this.state.text} />
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.state.inputIsEmpty}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
)
}
}

export default ChatWindows

