/**
 * @author  sai
 * created  2024-06-19
 * project  coding-assignment-14-cra
 */
import React from "react";
import styled from "styled-components";
import type { AppFooterProps } from "./AppFooter.types";

const StyledAppFooter = styled.footer`
  align-items: center;
  background-color: #1ea7fd;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;
`;

const AppFooter: React.FC<AppFooterProps> = ({ children, className }) => {
  return <StyledAppFooter className={className}>{children}</StyledAppFooter>;
};

export default AppFooter;
