/**
 * @author  sai
 * created  2024-06-17
 * project  coding-assignment-14-cra
 */

import React from "react";
import {
  SiJavascript,
  SiReact,
  SiPython,
  SiTypescript,
  SiRuby,
  SiPandas,
  SiPhp,
} from "react-icons/si";
import { Text } from "../components/Text";
import siteData from "../siteData.json";
import { Label } from "../components/Label";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import { HeroImage } from "../components/HeroImage";
import { BiCheckDouble } from "react-icons/bi";

const {
  siteSections: { skills },
} = siteData;

const ICON_SIZE = 48;

const iconElements: Record<string, React.ReactElement> = {
  javascript: <SiJavascript size={ICON_SIZE} />,
  typescript: <SiTypescript size={ICON_SIZE} />,
  react: <SiReact size={ICON_SIZE} />,
  python: <SiPython size={ICON_SIZE} />,
  ruby: <SiRuby size={ICON_SIZE} />,
  pandas: <SiPandas size={ICON_SIZE} />,
  php: <SiPhp size={ICON_SIZE} />,
};

const SkillsPage = (): React.ReactElement => {
  return (
    <PageWrapper>
      <HeroImage
        altText={"Skills hero image"}
        src='./code-hero-img.jpg'
      />
      <h1 className='text-4xl'>Skills</h1>
      <Text
        content={skills.description}
        foregroundColor='#f4f4f4'
      />
      <hr />
      <h2 className='text-2xl'>Languages and Frameworks</h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {skills.content.programmingLanguages.data.map((language, index) => (
          <div
            key={`language-${language}-${index}`}
            className='py-2 flex gap-x-4'
          >
            {iconElements[language.iconName]}
            <div className='flex flex-1 flex-col gap-y-4 md:gap-y-2'>
              <h2 className='text-2xl'>{language.name}</h2>
              {language.description ? (
                <Text
                  content={language.description}
                  foregroundColor='#f4f4f4'
                />
              ) : undefined}
              <h3 className='font-medium uppercase'>Used for</h3>
              <div className='flex items-center flex-wrap gap-x-2'>
                {language.uses.map((item) => (
                  <Label
                    key={item}
                    labelText={item}
                    iconElement={<BiCheckDouble />}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <h2 className='text-2xl'>Tools</h2>
    </PageWrapper>
  );
};

export default SkillsPage;
