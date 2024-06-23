/**
 * @author  sai
 * created  2024-06-23
 * project  coding-assignment-14-cra
 */
import React from "react";
import type { SkillTileProps } from "./SkillTile.types";
import { Text } from "../Text";
import { Label } from "../Label";
import { BiCheckDouble } from "react-icons/bi";

const SkillTile: React.FC<SkillTileProps> = ({ title, iconElement, usedFor, description }) => {
  return (
    <div className='py-2 flex gap-x-4'>
      {iconElement}
      <div className='flex flex-1 flex-col gap-y-4 md:gap-y-3'>
        <h3 className='text-xl'>{title}</h3>
        {description ? (
          <Text
            content={description}
            foregroundColor='#f4f4f4'
          />
        ) : undefined}
        <h4 className='font-medium uppercase'>Used for</h4>
        <div className='flex items-center flex-wrap gap-x-2'>
          {usedFor.map((item) => (
            <Label
              key={item}
              labelText={item}
              iconElement={<BiCheckDouble />}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillTile;
