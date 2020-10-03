import React, { useState } from "react";
import gen from "./wordGenerator";
import polyglot from "./translator";
import { ToastContainer, toast } from "react-toastify";

export default function Mail() {
  let lengthWord = 4;
  let suffix = "@mailnesia.com";
  const [word, setWord] = useState(gen(lengthWord));

  return (
    <div>
      <div className="mail__box">
        <div className="mail__input">
          <input
            className="email"
            type="email"
            id="email"
            value={getComposedMail(word, suffix)}
            readOnly
          />
        </div>
        <div className="mail__buttons">
          <button className="button" onClick={copy}>
            {polyglot.t("copy")}{" "}
            <span role="img" aria-label="sheet">
              📄
            </span>
          </button>
          <button className="button" onClick={() => setWord(gen(lengthWord))}>
            {polyglot.t("generate")}{" "}
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

function copy() {
  const email = document.getElementById("email");
  email.select();
  document.execCommand("copy");
  notify();
}

function notify() {
  toast(polyglot.t("copied"), {
    position: toast.POSITION.BOTTOM_LEFT,
  });
}

function getComposedMail(generatedWord, suffix) {
  return generatedWord + suffix;
}
