/**
 * @author  sai
 * created  2024-06-18
 * project  coding-assignment-14-cra
 */

import React from "react";
import type { PageWrapperProps } from "./PageWrapper.types";
import AppNav from "../AppNav/AppNav";

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div>
      <AppNav siteTitle='SN - Portfolio' />
      <div className='flex flex-col gap-y-4'>{children}</div>
    </div>
  );
};

export default PageWrapper;
