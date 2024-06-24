/**
 * @author  sai
 * created  2024-06-17
 * project  coding-assignment-14-cra
 */
import React from "react";
import PageWrapper from "../components/PageWrapper/PageWrapper";
import { HeroImage } from "../components/HeroImage";
import { SiDevdotto, SiDribbble, SiFreecodecamp } from "react-icons/si";
import { Link } from "react-router-dom";

import siteData from "../siteData.json";
import { Text } from "../components/Text";

const {
  siteSections: { resources },
} = siteData;

const ICON_SIZE = 48;

const ICON_ELEMENTS: Record<string, React.ReactElement> = {
  devTo: <SiDevdotto size={ICON_SIZE} />,
  freeCodeCamp: <SiFreecodecamp size={ICON_SIZE} />,
  dribbble: <SiDribbble size={ICON_SIZE} />,
};

const ResourcesPage = (): React.ReactElement => {
  return (
    <PageWrapper>
      <HeroImage
        altText={"resources headers"}
        src={"../../resources-header.jpg"}
      />
      <h1 className='text-4xl'>Resources</h1>
      <Text
        content={resources.description}
        foregroundColor='#f4f4f4'
      />
      <hr />
      <div className='flex flex-col gap-y-8'>
        <section className='flex flex-col gap-y-2'>
          {resources.content.map((resource) => (
            <div
              key={resource.category}
              className='flex flex-col gap-y-4'
            >
              <h2 className='text-2xl'>{resource.category}</h2>
              <Text
                content={resource.description}
                foregroundColor='#f4f4f4'
              />
              {resource.data.map((site) => (
                <div
                  key={site.name}
                  className='flex gap-x-4'
                >
                  {ICON_ELEMENTS[site.iconName]}
                  <div className='flex flex-1 flex-col gap-y-2'>
                    <Link
                      className='hover:text-green-600 duration-200 w-fit underline'
                      to={site.url}
                      target='_blank'
                    >
                      <h3 className='text-xl font-medium w-fit'>{site.name}</h3>
                    </Link>
                    <Text
                      content={site.description}
                      foregroundColor='#f6f6f6'
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </section>
      </div>
    </PageWrapper>
  );
};

export default ResourcesPage;
