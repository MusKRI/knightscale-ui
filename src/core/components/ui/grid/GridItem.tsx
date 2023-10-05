import { ForwardedRef, forwardRef } from "react";
import { GridItemVariants } from "./Grid.variants";

import { GridItemProps } from "./Grid.types";

import { spanToCSSValue } from "./utils";
import { cn } from "@/lib/utils";

const GridItem = forwardRef<HTMLDivElement, GridItemProps>(
  (props: GridItemProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      area,
      children,
      row,
      col,
      colStart,
      colSpan,
      colEnd,
      rowStart,
      rowSpan,
      rowEnd,
      className,
      ...rest
    } = props;

    return (
      <div
        ref={ref}
        className={cn(GridItemVariants({ className }))}
        style={{
          gridArea: area,
          gridColumn: col || spanToCSSValue(colSpan),
          gridRow: row || spanToCSSValue(rowSpan),
          gridColumnStart: colStart,
          gridColumnEnd: colEnd,
          gridRowStart: rowStart,
          gridRowEnd: rowEnd,
        }}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

GridItem.displayName = "GridItem";

export default GridItem;
