import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import gen from './wordGenerator';
import polyglot from './translator';

class Mail extends Component {
  constructor(props) {
    super(props);
    let lengthWord = 4;
    this.state = {
      lengthWord: lengthWord,
      suffix: '@mailnesia.com',
      word: gen(lengthWord)
    };
  }

  notify = () => {
    toast('The mail has been copied to clipboard.', {
      position: toast.POSITION.BOTTOM_LEFT
    });
  };

  newMail = () => {
    this.setState({ word: gen(this.state.lengthWord) });
  };

  copy = () => {
    console.log('prova');
    const email = document.getElementById('email');
    email.select();
    document.execCommand('copy');
    this.notify();
  };

  render() {
    return (
      <div>
        <div className="mail__box">
          <div className="mail__input">
            <input
              className="email"
              type="email"
              id="email"
              value={this.state.word + this.state.suffix}
              readOnly
            />
          </div>
          <div className="mail__buttons">
            <button className="button" onClick={this.copy}>
              {polyglot.t('copy')}{' '}
              <span role="img" aria-label="sheet">
                📄
              </span>
            </button>
            <button className="button" onClick={this.newMail}>
              {polyglot.t('generate')}{' '}
              <span role="img" aria-label="rocket">
                🚀
              </span>
            </button>
          </div>
        </div>
        <ToastContainer autoClose={4000} />
      </div>
    );
  }
}

export default Mail;
