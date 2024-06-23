/**
 * @author  sai
 * created  2024-06-23
 * project  coding-assignment-14-cra
 */
import type { ReactElement } from "react";

export type SkillTileProps = {
  iconElement: ReactElement;
  title: string;
  description?: string;
  usedFor: Array<string>;
};
