/**
 * @author  sai
 * created  2024-06-17
 * project  coding-assignment-14-cra
 */

import React from "react";
import { SiJavascript, SiReact, SiPython, SiTypescript, SiRuby, SiPandas } from "react-icons/si";
import { Text } from "../components/Text";
import siteData from "../siteData.json";
import { Label } from "../components/Label";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import { HeroImage } from "../components/HeroImage";

const {
  siteSections: { skills },
} = siteData;

const iconElements: Record<string, React.ReactElement> = {
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
  react: <SiReact />,
  python: <SiPython />,
  ruby: <SiRuby />,
  pandas: <SiPandas />,
};

const SkillsPage = (): React.ReactElement => {
  return (
    <PageWrapper>
      <HeroImage
        altText={"Skills hero image"}
        src='./code-hero-img.jpg'
      />
      <h1 className='text-4xl'>Skills</h1>
      <Text content={skills.description} />
      <h2 className='text-2xl'>Languages and Frameworks</h2>

      <div className='flex items-center gap-x-4'>
        {skills.languages.map((language, index) => (
          <Label
            key={`language-${language}-${index}`}
            iconElement={iconElements[language.iconName]}
            labelText={language.name}
          />
        ))}
      </div>
      <h2 className='text-2xl'>Tools</h2>
    </PageWrapper>
  );
};

export default SkillsPage;
