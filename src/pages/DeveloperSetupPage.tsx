/**
 * @author  sai
 * created  2024-06-17
 * project  coding-assignment-14-cra
 */
import React from "react";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import { HeroImage } from "../components/HeroImage";
import siteData from "../siteData.json";

const {
  siteSections: { developerSetup },
} = siteData;

const DeveloperSetupPage = (): React.ReactElement => {
  return (
    <PageWrapper>
      <HeroImage
        altText={"developer setup hero image"}
        src='../code-hero-img.jpg'
      />
      <h1 className='text-5xl'>Developer Setup</h1>
      <p className='leading-8'>{developerSetup.description}</p>
      <h2>Developer Environment</h2>
      <p>Preferred IDE: {developerSetup.ideSetup.name}</p>
    </PageWrapper>
  );
};

export default DeveloperSetupPage;
