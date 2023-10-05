import { forwardRef, ForwardedRef } from "react";
import { GridItemVariants, GridVariants } from "./Grid.variants";

import { GridProps } from "./Grid.types";
import GridItem from "./GridItem";
import { cn } from "@/lib/utils";

interface GridComposition
  extends React.ForwardRefExoticComponent<
    GridProps & React.RefAttributes<HTMLDivElement>
  > {
  Item: typeof GridItem;
}

const Grid = forwardRef<HTMLDivElement, GridProps>(
  (props: GridProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      children,
      className,
      autoColumns,
      autoRows,
      templateAreas,
      templateColumns,
      templateRows,
      ...rest
    } = props;

    return (
      <div
        ref={ref}
        className={cn(GridVariants({ className }))}
        style={{
          gridAutoColumns: autoColumns,
          gridAutoRows: autoRows,
          gridTemplateAreas: templateAreas,
          gridTemplateRows: templateRows,
          gridTemplateColumns: templateColumns,
        }}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Grid.displayName = "Grid";

const ComposableGrid = {
  ...Grid,
  Item: GridItem,
} as GridComposition;

export default ComposableGrid;
