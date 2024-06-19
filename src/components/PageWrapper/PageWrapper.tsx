/**
 * @author  sai
 * created  2024-06-18
 * project  coding-assignment-14-cra
 */

import React from "react";
import type { PageWrapperProps } from "./PageWrapper.types";
import AppNav from "../AppNav/AppNav";
import AppFooter from "../AppFooter/AppFooter";

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div>
      <AppNav siteTitle='SN - Portfolio' />
      <div className='flex flex-col gap-y-4 px-4 md:px-0 pb-12'>{children}</div>
      <AppFooter className='absolute bottom-0 right-0 left-0'>
        <span className='text-center w-full'>&copy; CopyWrong 2024 - SN - Portfolio</span>
      </AppFooter>
    </div>
  );
};

export default PageWrapper;
