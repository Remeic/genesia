import React, { Component } from "react";
import { styled } from "goober";
import MailDisplay from "../../components/MailDisplay";
import MailActions from "../../components/MailActions";
import {
  ALL_MAIL_SERVICES,
  MAIL_SERVICES_DOMAINS,
  MAIL_SERVICES_MAILBOX_PATH_CONFIG,
} from "../../config";
import { MAILBOX_NAME_LENGTH } from "../../config/generalConfig";
import {
  generateRandomWord,
  getMessage,
  openLinkInNewTab,
  copyTextToClipboard,
} from "../../utils";

const StyledMailGenerator = styled("div")((props) => ({
  display: "block",
  margin: "20% 5%",
  "@media(min-width: 992px)": {
    margin: "10% 20% 20% 20%",
  },
}));

export default class MailGenerator extends Component {
  state = {
    mailBoxName: generateRandomWord(MAILBOX_NAME_LENGTH),
    mailService: ALL_MAIL_SERVICES[0],
  };

  setMailBoxName = (mailBoxName) => {
    this.setState({
      ...this.state,
      mailBoxName: mailBoxName,
    });
  };

  setMailService = (mailService) => {
    this.setState({
      ...this.state,
      mailService: mailService,
    });
  };

  getComposedEmailId = () => {
    const {mailBoxName, mailService} = this.state;
    return `${mailBoxName}@${MAIL_SERVICES_DOMAINS[mailService]}`;
  };

  openMailBoxInNewTab = () => {
    const {mailBoxName, mailService} = this.state;
    const mailBoxPathConfig = MAIL_SERVICES_MAILBOX_PATH_CONFIG[mailService];
    const composedMailboxUrl = `${mailBoxPathConfig.prefix}${mailBoxName}${mailBoxPathConfig.suffix}`;
    openLinkInNewTab(composedMailboxUrl);
  };

  generateAndSetMailBoxName = () => {
    this.setMailBoxName(generateRandomWord(MAILBOX_NAME_LENGTH));
  };

  copyMailIdToClipboard = () => {
    copyTextToClipboard(this.getComposedEmailId(), getMessage("copied"));
  };

  render() {
    const { mailBoxName, mailService } = this.state;

    return (
      <StyledMailGenerator>
        <MailDisplay
          mailBoxName={mailBoxName}
          mailServiceDomain={mailService}
          changeMailBoxName={this.setMailBoxName}
          changeMailService={this.setMailService}
        />

        <MailActions
          copyMailIdToClipboard={this.copyMailIdToClipboard}
          generateMailName={this.generateAndSetMailBoxName}
          openMailBoxInNewTab={this.openMailBoxInNewTab}
        />
      </StyledMailGenerator>
    );
  }
}
