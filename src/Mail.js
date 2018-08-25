import React, { Component } from 'react'
import gen from './wordGenerator'

class Mail extends Component {
  constructor(props) {
    super(props)
    let lengthWord = 4
    this.state = {lengthWord: lengthWord, suffix: '@mailnesia.com',word: gen(lengthWord)}
    this.newMail = this.newMail.bind(this);
    this.copy = this.copy.bind(this);
  }

  newMail() {
    this.setState({word: gen(this.state.lengthWord)})
  }

  copy() {
    console.log("prova");
    const email = document.getElementById("email")
    email.select()
    document.execCommand("copy")
  }

  render() {
    return (
      <div>
          <div className="mail__box">
            <div className="mail__input">
              <input className="email" type="email" id="email" value={this.state.word + this.state.suffix} readOnly />
            </div>
            <div className="mail__buttons">
              <button className="button" onClick={this.copy}>Copia 📄</button>
              <button className="button" onClick={this.newMail}>Genera 🚀</button>
            </div>
          </div>
      </div>
    )
  }
}

export default Mail