/**
 * @author  sai
 * created  2024-06-17
 * project  coding-assignment-14-cra
 */

import React from "react";
import { BiCalendarCheck } from "react-icons/bi";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import { HeroImage } from "../components/HeroImage";
import { Image } from "../components/Image";
import { Label } from "../components/Label";
import { Text } from "../components/Text";
import siteData from "../siteData.json";

const {
  siteSections: { work: workSection },
} = siteData;

const WorkPage = (): React.ReactElement => {
  return (
    <PageWrapper>
      <HeroImage
        altText={"Work page banner image"}
        src={"../code-hero-img.jpg"}
      />
      <h1 className='text-5xl'>Work - Showcase</h1>
      <p>These are the projects that I have worked on</p>
      <hr />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {workSection.projects.map((project, projectIndex) => (
          <div
            key={`${projectIndex}-${project.name}`}
            className='border-1 border-white rounded-md flex gap-x-0 md:gap-x-2'
          >
            <div className='w-1/3 lg:w-2/5'>
              <Image
                altText={"Project Image"}
                src={"../../eat-sleep-code-repeat.jpg"}
              />
            </div>
            <div className='py-4 flex flex-col flex-1 pr-2 gap-y-4'>
              <div className='flex items-center justify-between'>
                <h2 className='text-2xl'>{project.name}</h2>
                <Link
                  className='flex gap-x-2 bg-indigo-700 py-1 px-2 rounded items-center hover:bg-indigo-400 duration-200 w-fit'
                  target={"_blank"}
                  to={project.repositoryUrl}
                >
                  <SiGithub />
                  Link to Project
                </Link>
              </div>
              <p>{project.description}</p>
              <Label
                iconElement={<BiCalendarCheck />}
                labelText={`${project.yearDone}`}
              />
              <h3>Technologies Used</h3>
              <div className='grid grid-cols-1 md:grid-cols-2'>
                {project.technologiesUsed.map((tech) => (
                  <div
                    key={tech.category}
                    className='flex flex-col gap-y-2'
                  >
                    <h4 className='underline text-slate-500'>{tech.category}</h4>
                    <Text
                      content={tech.options.join(", ")}
                      foregroundColor={"#fff"}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default WorkPage;
