import React, { Component } from 'react'
import gen from './wordGenerator'
import polyglot from './translator';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Mail extends Component {
  constructor(props) {
    super(props)
    let lengthWord = 4
    this.state = { lengthWord: lengthWord, suffix: '@mailnesia.com', word: gen(lengthWord) }
    this.newMail = this.newMail.bind(this);
    this.copy = this.copy.bind(this);
  }

  newMail() {
    this.setState({ word: gen(this.state.lengthWord) })
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
            <TextField className="email" type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              id="email"
              value={this.state.word + this.state.suffix}
              readOnly
              margin="normal" />
          </div>
          <div className="mail__buttons">
            <Button variant="contained" className="button" onClick={this.copy}>{polyglot.t("copy")} <span role="img" aria-label="sheet">📄</span></Button>
            <Button variant="contained" className="button" onClick={this.newMail}>{polyglot.t("generate")} <span role="img" aria-label="rocket">🚀</span></Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Mail
