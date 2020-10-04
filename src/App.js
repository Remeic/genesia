import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import { styled } from "goober";
import Title from './components/Title';
import MailGenerator from "./containers/MailGenerator";
import AttributionMessage from "./components/AttributionMessage";
import {TITLE_TEXT} from './config/generalConfig'
import { setup } from "goober";

setup(React.createElement);

const StyledApp = styled("div")`
    text-align: center; 
    padding-top: 5%;
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Title titleText={TITLE_TEXT}/>
        <MailGenerator />
        <AttributionMessage />
        <ToastContainer autoClose={4000} />
      </StyledApp>
    );
  }
}

export default App;
