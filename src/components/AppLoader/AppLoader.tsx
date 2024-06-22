/**
 * @author  sai
 * created  2024-06-22
 * project  coding-assignment-14-cra
 */
import React from "react";
import type { AppLoaderProps } from "./AppLoader.types";

export const AppLoader: React.FC<AppLoaderProps> = ({ loadingText }) => {
  return (
    <div className='h-screen w-full bg-midnight text-white'>
      <div className='flex self-center justify-self-center'>
        <p>{loadingText ? loadingText : "Loading..."}</p>
      </div>
    </div>
  );
};
