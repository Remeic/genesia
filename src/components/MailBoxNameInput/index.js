import React from "react";
import { styled } from "goober";

const StyledMailboxNameInput = styled("input")`
  background: none;
  border: 2px solid white;
  line-height: 2;
  border-radius: 4px;
  color: white;
  text-align: center;
  width: 40%;
  flex-grow: 4
`;

export default function MailboxNameInput(props) {
  const { mailBoxName, changeMailBoxName } = props;
  return (
    <StyledMailboxNameInput
      type="name"
      id="name"
      value={mailBoxName}
      onChange={changeMailBoxName}
      readOnly
    />
  );
}
