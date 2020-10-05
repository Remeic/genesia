import React from "react";
import {
  MAIL_SERVICES_HOMEPAGES,
  MAIL_SERVICE_NAMES,
  ALL_MAIL_SERVICES,
} from "../../config";
import { styled } from "goober";

const StyledMailServiceAttribution = styled("a")`
  margin-right: 10px;
  color: inherit;
  text-decoration: underline;
`;

const MailServiceAttribution = ({ link, name }) => (
  <StyledMailServiceAttribution target="_blank" href={link}>
    {name}
  </StyledMailServiceAttribution>
);

const StyledAttributionMessage = styled("h4")`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  color: white;
`;

export default function AttributionMessage() {
  return (
    <StyledAttributionMessage>
      Thanks to{" "}
      {ALL_MAIL_SERVICES.map((serviceKey) => (
        <MailServiceAttribution
          key={serviceKey}
          link={MAIL_SERVICES_HOMEPAGES[serviceKey]}
          name={MAIL_SERVICE_NAMES[serviceKey]}
        />
      ))}
    </StyledAttributionMessage>
  );
}
