/**
 * @author  sai
 * created  2024-06-18
 * project  coding-assignment-14-cra
 */

import type { ReactNode } from "react";
import type { DefaultComponentProps } from "../../@types/app";

export type AppNavProps = DefaultComponentProps & {
  siteTitle: string;
  children?: ReactNode;
};

export type StyledAppNavProps = DefaultComponentProps;
