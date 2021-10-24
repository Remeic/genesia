
import React from "react";
import { styled } from "goober";
import MailboxNameInput from "../MailBoxNameInput";
import MailServiceSelector from "../MailServiceSelector";

const StyledMailDisplay = styled("div")(() => ({
  color: "white",
  fontWeight: "bold",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: "1em",
  "@media(min-width: 992px)": {
    flexDirection: "row",
    fontSize: "1.5em",
    justifyContent: "space-between",
    alignItems: "stretch",
    paddingBottom: "5%" 
  },
}));


export default function MailDisplay(props) {
  const {
    mailBoxName,
    mailServiceDomain,
    changeMailService,
    changeMailBoxName,
  } = props;

  return (
    <StyledMailDisplay>
      <MailboxNameInput
        key="mailboxNameInput"
        mailBoxName={mailBoxName}
        changeMailBoxName={changeMailBoxName}
      />
      <h2 style={{flexGrow: "1" }}>@</h2>
      <MailServiceSelector
        key="mailServiceSelector"
        mailServiceDomain={mailServiceDomain}
        changeMailService={changeMailService}
      />
    </StyledMailDisplay>
  );
}
