/**
 * @author  sai
 * created  2024-06-17
 * project  coding-assignment-14-cra
 */
import React from "react";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { FaCheck } from "react-icons/fa";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import { HeroImage } from "../components/HeroImage";
import siteData from "../siteData.json";
import { Label } from "../components/Label";

const {
  siteSections: { developerSetup },
} = siteData;

const DeveloperSetupPage = (): React.ReactElement => {
  return (
    <PageWrapper>
      <HeroImage
        altText={"developer setup hero image"}
        src='../developer-setup-img.jpg'
      />
      <h1 className='text-5xl'>Developer Setup</h1>
      <p className='leading-8'>{developerSetup.description}</p>

      {developerSetup.content.map((content, contentIndex) => (
        <div
          key={`${contentIndex}-${content.category}`}
          className='flex flex-col gap-y-2 py-2'
        >
          <h3 className='text-2xl font-medium'>{content.category}</h3>
          <p className='mb-4'>{content.description}</p>
          {content.tools.map((tool, toolIndex) => (
            <div
              key={`${toolIndex}-${tool.name}`}
              className='flex flex-col gap-y-2 mb-2'
            >
              <div className='flex items-center gap-x-1'>
                <HiWrenchScrewdriver />
                <h4 className='font-bold text-lg'>{tool.name}</h4>
              </div>
              <p className='text-lg'>{tool.description}</p>
              <h5>Features</h5>
              <div className='flex items-center flex-wrap gap-4'>
                {tool?.features?.map((feature, featureIndex) => (
                  <Label
                    iconElement={<FaCheck />}
                    key={`${featureIndex}-${feature}`}
                    labelText={feature}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </PageWrapper>
  );
};

export default DeveloperSetupPage;
