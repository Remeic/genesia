import React from "react";
import { getMessage } from "../../utils/translationUtils";
import { styled } from "goober";

const StyledAction = styled("button")`
  display: inline-block;
  position: relative;
  line-height: 32px;
  border-radius: 2px;
  font-size: 0.9em;
  background-color: #fff;
  color: #646464;
  padding: 0.3rem 1.3rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 5%;
`;


const Action = (props) => {
  const { actionCallback, messageId, emoji, emojiLabel } = props;
  return (
    <StyledAction onClick={actionCallback}>
      {getMessage(messageId)}{" "}
      <span role="img" aria-label={emojiLabel}>
        {emoji}
      </span>
    </StyledAction>
  );
};

const StyledMailActions = styled("div")((props) => ({
  width: "80%",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  padding: "0% 5% 0% 5%",
  "@media(min-width: 992px)": {
    flexDirection: "row",
    padding: "0",
  },
}));

const MailActions = (props) => {
  const {
    copyMailIdToClipboard,
    generateMailName,
    openMailBoxInNewTab,
  } = props;

  const ACTION_BUTTONS_CONFIG = [
    {
      actionCallback: copyMailIdToClipboard,
      messageId: "copy",
      emoji: "📄",
      emojiLabel: "sheet",
    },
    {
      actionCallback: generateMailName,
      messageId: "generate",
      emoji: "⚡️",
      emojiLabel: "zap",
    },
    {
      actionCallback: openMailBoxInNewTab,
      messageId: "gotomailbox",
      emoji: "🚀",
      emojiLabel: "rocket",
    },
  ];

  return (
    <StyledMailActions>
      {ACTION_BUTTONS_CONFIG.map((config) => (
        <Action
          key={config.messageId}
          actionCallback={config.actionCallback}
          messageId={config.messageId}
          emoji={config.emoji}
          emojiLabel={config.emojiLabel}
        />
      ))}
    </StyledMailActions>
  );
};

export default MailActions;
