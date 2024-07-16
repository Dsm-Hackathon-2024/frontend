import React from "react";
import GlobalStyle from "./GlobalStyle";

export const StyledProvider = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};
