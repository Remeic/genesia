import React, { Component } from 'react'
import gen from './wordGenerator'

class Mail extends Component {
  constructor(props) {
    super(props)
    let lengthWord = 4
    this.state = {lengthWord: lengthWord, suffix: '@mailnesia.com',word: gen(lengthWord)}
    this.newMail = this.newMail.bind(this);
  }

  newMail() {
    this.setState({word: gen(this.state.lengthWord)})
  }

  render() {
    return (
      <div>
          <div className="mail__box">
            <div className="mail__input">
              <p>{this.state.word + this.state.suffix}</p>
            </div>
            <div className="mail__button">
              <button className="button" onClick={this.newMail}>Genera!</button>
            </div>
          </div>
      </div>
    )
  }
}

export default Mail