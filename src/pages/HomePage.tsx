/**
 * @author  sai
 * created  2024-06-17
 * project  coding-assignment-14-cra
 */
import React from "react";
import PageWrapper from "../components/PageWrapper/PageWrapper";

const HomePage = (): React.ReactElement => {
  return (
    <PageWrapper>
      <h1 className='text-5xl'>Coding Assignment 14</h1>
      <small>WEBD 3012 - Business Systems Build & Test</small>
      <hr />
      <p>Home Page </p>
    </PageWrapper>
  );
};

export default HomePage;
