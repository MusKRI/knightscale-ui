import { ForwardRefExoticComponent, HTMLAttributes } from "react";
import { type VariantProps } from "class-variance-authority";

import { GridVariants, GridItemVariants } from "./Grid.variants";

export type FlowVariantType = VariantProps<typeof GridVariants>["flow"];

export type AlignVariantType = VariantProps<typeof GridVariants>["align"];

export type JustifyVariantType = VariantProps<typeof GridVariants>["justify"];

export type GapVariantType = VariantProps<typeof GridVariants>["gap"];

export type GapXVariantType = VariantProps<typeof GridVariants>["gapX"];

export type GapYVariantType = VariantProps<typeof GridVariants>["gapY"];

export type AlignSelfVariantType = VariantProps<
  typeof GridItemVariants
>["alignSelf"];

export type JustifySelfVariantType = VariantProps<
  typeof GridItemVariants
>["justifySelf"];

export type PlaceSelfVariantType = VariantProps<
  typeof GridItemVariants
>["placeSelf"];

export interface GridItemProps extends HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  children?: React.ReactNode;
  area?: string;
  col?: number;
  colEnd?: number;
  colSpan?: number;
  colStart?: number;
  row?: number;
  rowEnd?: number;
  rowSpan?: number;
  rowStart?: number;
  justifySelf?: JustifySelfVariantType;
  alignSelf?: AlignSelfVariantType;
  placeSelf?: PlaceSelfVariantType;
  className?: string;
}

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  autoColumns?: string;
  autoRows?: string;
  flow?: FlowVariantType;
  justify?: JustifyVariantType;
  align?: AlignVariantType;
  gap?: GapVariantType;
  gapY?: GapYVariantType;
  gapX?: GapXVariantType;
  templateAreas?: string;
  templateRows?: string;
  templateColumns?: string;
  children?: React.ReactNode;
}
