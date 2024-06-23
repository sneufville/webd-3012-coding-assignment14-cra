/**
 * @author  sai
 * created  2024-06-18
 * project  coding-assignment-14-cra
 */
import React from "react";
import styled from "styled-components";
import type { AppNavProps, StyledAppNavProps } from "./AppNav.types";
import { Link, useLocation } from "react-router-dom";
import { FaLaptopCode } from "react-icons/fa";

const StyledAppNav = styled.nav<StyledAppNavProps>`
  align-items: center;
  display: flex;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const AppNav: React.FC<AppNavProps> = ({ disabled, siteTitle }) => {
  const location = useLocation();
  console.log("location path: ", location.pathname);
  return (
    <StyledAppNav
      className='py-6 flex items-center justify-between'
      disabled={disabled}
    >
      <Link
        className='cursor-pointer p-2 border-2'
        to='/'
      >
        {siteTitle}
      </Link>
      <div className='flex items-center gap-x-4'>
        <Link
          className={[
            "flex items-center gap-x-1",
            location.pathname === "/developer-setup" ? "underline" : "no-underline",
          ].join(" ")}
          to='/developer-setup'
        >
          <FaLaptopCode className='text-white' />
          Developer Setup
        </Link>
        <Link
          to='/resources'
          className={location.pathname === "/resources" ? "underline" : "no-underline"}
        >
          Resources
        </Link>
        <Link
          to='/skills'
          className={location.pathname === "/skills" ? "underline" : "no-underline"}
        >
          Skills
        </Link>
        <Link
          to='/work'
          className={location.pathname === "/work" ? "underline" : "no-underline"}
        >
          Work
        </Link>
      </div>
    </StyledAppNav>
  );
};

export default AppNav;
