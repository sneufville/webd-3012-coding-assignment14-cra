/**
 * @author  sai
 * created  2024-06-17
 * project  coding-assignment-14-cra
 */
import React from "react";
import { SiGithub } from "react-icons/si";
import { FaCheckSquare, FaExternalLinkAlt, FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import siteData from "../siteData.json";
import { Label } from "../components/Label";

const {
  siteSections: { basicInformation },
} = siteData;

const HomePage = (): React.ReactElement => {
  return (
    <PageWrapper>
      <h1 className='text-5xl'>{basicInformation.siteTitle}</h1>
      <div className='flex items-center flex-wrap gap-2'>
        {basicInformation.titles.map((title, index) => (
          <Label
            key={`${index}-${title}`}
            labelText={title}
          />
        ))}
      </div>
      <hr />
      <h2 className='text-2xl'>About Me</h2>
      <blockquote className='text-lg italic leading-8'>{basicInformation.aboutMe}</blockquote>
      <h3 className='text-xl font-medium'>Areas of Focus</h3>
      <p className='text-lg'>The following is a list of my current areas of focus.</p>
      <div className='flex gap-2 flex-wrap'>
        {basicInformation.areasOfFocus.map((focus, index) => (
          <Label
            key={`${index}-${focus}`}
            iconElement={<FaCheckSquare />}
            labelText={focus}
          />
        ))}
      </div>
      <h2 className='text-2xl'>About This Site</h2>
      <blockquote className='text-lg leading-8'>{basicInformation.aboutSite}</blockquote>
      <h2 className='text-2xl'>Where To Find Me</h2>
      <Link
        className='flex gap-x-2 bg-indigo-700 p-2 rounded items-center hover:bg-indigo-400 duration-200 w-fit'
        target={"_blank"}
        to={basicInformation.socialLinks.github.path}
      >
        <SiGithub /> {basicInformation.socialLinks.github.name} <FaExternalLinkAlt />
      </Link>
      <h2 className='text-2xl'>While You&apos;re Here</h2>
      <p>
        Feel free to check out the different sections of the portfolio. I have included a short
        description of each section and what you can expect to find there.
      </p>
      {basicInformation.sectionSummaries.map((sectionSummary, index) => (
        <div
          key={`${index}-${sectionSummary.sectionName}`}
          className='flex flex-col gap-y-2'
        >
          <Link to={sectionSummary.path}>
            <h3 className='text-xl font-medium flex items-center gap-x-2 hover:text-slate-300 duration-200'>
              <FaLink />
              {sectionSummary.sectionName}
            </h3>
          </Link>
          <p>{sectionSummary.description}</p>
        </div>
      ))}
    </PageWrapper>
  );
};

export default HomePage;
