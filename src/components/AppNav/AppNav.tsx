/**
 * @author  sai
 * created  2024-06-18
 * project  coding-assignment-14-cra
 */
import React from "react";
import styled from "styled-components";
import type { AppNavProps, StyledAppNavProps } from "./AppNav.types";
import { Link } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";

const StyledAppNav = styled.nav<StyledAppNavProps>`
  align-items: center;
  display: flex;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const AppNav: React.FC<AppNavProps> = ({ disabled, siteTitle }) => {
  return (
    <StyledAppNav
      className='py-6 flex items-center justify-between'
      disabled={disabled}
    >
      <Link
        className='cursor-pointer'
        to='/'
      >
        {siteTitle}
      </Link>
      <div className='flex items-center gap-x-4'>
        <Link
          className='flex items-center gap-x-1'
          to='/developer-setup'
        >
          <FaLaptopCode className='text-white' />
          Developer Setup
        </Link>
        <Link to='/resources'>Resources</Link>
        <Link to='/skills'>Skills</Link>
        <Link to='/work'>Work</Link>
      </div>
    </StyledAppNav>
  );
};

export default AppNav;
