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
  SiStorybook,
  SiGithubactions,
  SiDocker,
} from "react-icons/si";
import { Text } from "../components/Text";
import siteData from "../siteData.json";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import { HeroImage } from "../components/HeroImage";
import SkillTile from "../components/SkillTile/SkillTile";

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
  docker: <SiDocker size={ICON_SIZE} />,
  githubActions: <SiGithubactions size={ICON_SIZE} />,
  storybook: <SiStorybook size={ICON_SIZE} />,
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
      <div className='flex flex-col gap-y-8'>
        <section className='flex flex-col gap-y-2'>
          <h2 className='text-2xl'>Languages and Frameworks</h2>
          <Text
            content={skills.content.programmingLanguages.description}
            foregroundColor='#f4f4f4'
          />
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {skills.content.programmingLanguages.data.map((language, index) => (
              <SkillTile
                key={`language-${index}`}
                iconElement={iconElements[language.iconName]}
                title={language.name}
                description={language.description}
                usedFor={language.uses}
              />
            ))}
          </div>
        </section>
        <section className='flex flex-col gap-y-2'>
          <h2 className='text-2xl'>Libraries & Modules</h2>
          <Text
            content={skills.content.libraries.description}
            foregroundColor='#f4f4f4'
          />
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {skills.content.libraries.data.map((library, index) => (
              <SkillTile
                key={`library-${index}`}
                iconElement={iconElements[library.iconName]}
                title={library.name}
                description={library.description}
                usedFor={library.uses}
              />
            ))}
          </div>
        </section>
        <section className='flex flex-col gap-y-2'>
          <h2 className='text-2xl'>Tools</h2>
          <Text
            content={skills.content.tools.description}
            foregroundColor='#f4f4f4'
          />
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {skills.content.tools.data.map((tool, index) => (
              <SkillTile
                key={`tool-${index}`}
                iconElement={iconElements[tool.iconName]}
                title={tool.name}
                description={tool.description}
                usedFor={tool.uses}
              />
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default SkillsPage;
