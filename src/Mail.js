import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import gen from './wordGenerator';
import polyglot from './translator';

let defaultLengthWord = 4;

function Mail() {
  const [lengthWord] = useState(defaultLengthWord);
  const [suffix] = useState('@mailnesia.com');
  const [word, setWord] = useState(gen(defaultLengthWord));

  function notify() {
    toast(polyglot.t('copied'), {
      position: toast.POSITION.BOTTOM_LEFT
    });
  };

  function newMail() {
    setWord(gen(lengthWord));
  };

  function copy() {
    const email = document.getElementById('email');
    email.select();
    document.execCommand('copy');
    notify();
  };

  return (
    <div>
      <div className="mail__box">
        <div className="mail__input">
          <input
            className="email"
            type="email"
            id="email"
            value={`${word}${suffix}`}
            readOnly
          />
        </div>
        <div className="mail__buttons">
          <button className="button" onClick={() => copy()}>
            {polyglot.t('copy')}{' '}
            <span role="img" aria-label="sheet">
              📄
            </span>
          </button>
          <button className="button" onClick={() => newMail()}>
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

export default Mail;
