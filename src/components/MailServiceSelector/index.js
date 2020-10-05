import React from "react";
import Select from "react-select";
import { styled } from "goober";
import {
  MAIL_SERVICES_DOMAINS,
  ALL_MAIL_SERVICES,
} from "../../config";


const StyledMailServiceSelector = styled("div")`
    cursor: pointer;
    flex-grow: 2;
    display: flex;
    justify-content: center;
`;

const MailServiceSelector = (props) => {
  const { selectedMailService, changeMailService } = props;

  const mailServiceOptions = ALL_MAIL_SERVICES.map((serviceKey) => {
    return { value: serviceKey, label: MAIL_SERVICES_DOMAINS[serviceKey] };
  });

  const selectedMailServiceOption = mailServiceOptions.find(
    (option) => option.serviceKey === selectedMailService
  );

  const SELECT_STYLE_CONFIG = {
    option: (provided, state) => ({
      ...provided,
      color: "black",
      opactiy: 1,
      lineHeight: 2,
      width: 250,
      cursor: "pointer",
    }),
    menu: (provided, state) => ({
      ...provided,
      width: 250,
      background: "rgba(256, 256, 256, 1)",
      cursor: "pointer",
    }),
    control: () => ({
      width: 250,
      display: "flex",
      justifyContent: "center",
      lineHeight: 4,
      cursor: "pointer",
    }),
    singleValue: (provided, state) => {
      const transition = "opacity 300ms";
      const opacity =1;
      return { ...provided, opacity, transition };
    },
  };

  return (
    <StyledMailServiceSelector>
      <Select
        styles={SELECT_STYLE_CONFIG}
        isSearchable
        defaultValue={selectedMailServiceOption}
        onChange={(option) => changeMailService(option.value)}
        options={mailServiceOptions}
        components={{
          IndicatorSeparator: () => null
        }}
      />
    </StyledMailServiceSelector>
  );
};


export default MailServiceSelector;