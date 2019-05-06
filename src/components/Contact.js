import React, { Component } from 'react'


class Contact extends Component {
  render() {
    const {name,email,props} = this.props; // deconstructor 
    return (
      <div>
        <h4>{name}</h4>
        <ul>
            <li>Email:{email}</li>
            <li>Phone number: {email}</li>
        </ul>
      </div>
    )
  }
}

export default Contact;