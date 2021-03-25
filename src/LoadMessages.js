import React from 'react'
import PropTypes from 'prop-types'

const LoadMessages = (props) => {
  const {username, messages} = props
  return (
   <ul className="message-list">
              {messages.map((message, index) => (
                <li
                  key={index}
                  className={
                    message.username === username ? 'message sender' : 'message recipient'
                  }
                >
                  <p>{`${message.username}: ${message.text}`}</p>
                </li>
              ))}
            </ul>
  )

}

LoadMessages.propTypes = {
	username : PropTypes.string.isRequired,
	messages : PropTypes.array.isRequired
}

export default LoadMessages