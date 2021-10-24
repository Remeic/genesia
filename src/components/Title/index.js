import React from "react";
import { styled } from "goober";

const StyledTitle = styled("div")`
  font-size: 3rem;
  color: white;
`;
export default function Title({titleText}) {
  return <StyledTitle>{titleText}</StyledTitle>;
}
