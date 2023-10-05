import React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const FlexVariants = cva(`flex`, {
  variants: {
    alignItems: {
      baseline: `items-baseline`,
      center: `items-center`,
      "flex-end": `items-end`,
      "flex-start": `items-start`,
      stretch: `items-stretch`,
    },
    alignContent: {
      baseline: `content-baseline`,
      center: `content-center`,
      end: `content-end`,
      start: `content-start`,
      stretch: `content-stretch`,
    },
    direction: {
      column: `flex-col`,
      columnReverse: `flex-col-reverse`,
      row: `flex-row`,
      rowReverse: `flex-row-reverse`,
    },
    gap: {
      1: `gap-space-1`,
      2: `gap-space-2`,
      3: `gap-space-3`,
      4: `gap-space-4`,
      5: `gap-space-5`,
      6: `gap-space-6`,
      7: `gap-space-7`,
      8: `gap-space-8`,
      9: `gap-space-9`,
      10: `gap-space-10`,
      11: `gap-space-11`,
      12: `gap-space-12`,
      13: `gap-space-13`,
      14: `gap-space-14`,
      15: `gap-space-15`,
    },
    justifyContent: {
      center: `justify-center`,
      end: `justify-end`,
      "space-around": `justify-around`,
      "space-between": `justify-between`,
      "space-evenly": `justify-evenly`,
      start: `justify-start`,
    },
    wrap: {
      wrap: `flex-wrap`,
      nowrap: `flex-nowrap`,
    },
  },

  defaultVariants: {
    gap: 1,
    wrap: "nowrap",
    direction: "row",
    alignItems: "center",
    justifyContent: "start",
  },
});

interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof FlexVariants> {}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      className,
      gap,
      wrap,
      direction,
      alignItems,
      justifyContent,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          FlexVariants({ gap, wrap, direction, alignItems, justifyContent }),
          className
        )}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

export { Flex };
