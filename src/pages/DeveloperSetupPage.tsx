/**
 * @author  sai
 * created  2024-06-17
 * project  coding-assignment-14-cra
 */
import React from "react";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { RiFontFamily, RiFontSize2, RiLineHeight } from "react-icons/ri";
import { SiUbuntu, SiZsh } from "react-icons/si";
import { BiSolidExtension } from "react-icons/bi";
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
      <hr />
      <h2 className='text-3xl'>Developer Preferences</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        <div className='flex flex-col gap-y-2'>
          <h3 className='text-xl font-medium'>Preferred OS</h3>
          <Label
            iconElement={<SiUbuntu />}
            labelText={developerSetup.devEnvironment.operatingSystem.name}
          />
          <h4 className='font-medium'>Addons</h4>
          <div className='flex items-center gap-2 flex-wrap'>
            {developerSetup.devEnvironment.operatingSystem.addOns.map((addOn) => (
              <Label
                key={addOn}
                iconElement={<BiSolidExtension />}
                labelText={addOn}
              />
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-y-2'>
          <h3 className='text-xl font-medium'>Preferred Editor Font</h3>
          <div className='grid grid-cols-1 gap-2'>
            <Label
              iconElement={<RiFontFamily />}
              labelText={`Font Name: ${developerSetup.devEnvironment.preferredFontSettings.name}`}
            />
            <Label
              iconElement={<RiFontSize2 />}
              labelText={`Font Size: ${developerSetup.devEnvironment.preferredFontSettings.fontSize}`}
            />
            <Label
              iconElement={<RiLineHeight />}
              labelText={`Line Spacing: ${developerSetup.devEnvironment.preferredFontSettings.lineSpacing}`}
            />
          </div>
        </div>
        <div className='flex flex-col gap-y-2'>
          <h3 className='text-xl font-medium'>Preferred Shell / Terminal</h3>
          <Label
            iconElement={<SiZsh />}
            labelText={`${developerSetup.devEnvironment.terminalSetup.preferredShell}`}
          />
          <h4 className='font-medium'>Addons</h4>
          <div className='flex items-center gap-2 flex-wrap'>
            {developerSetup.devEnvironment.terminalSetup.addOns.map((addOn) => (
              <Label
                key={addOn}
                iconElement={<BiSolidExtension />}
                labelText={addOn}
              />
            ))}
          </div>
        </div>
      </div>

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
