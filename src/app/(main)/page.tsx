// **** Library Imports ****

// **** Local Imports ****
import Flex from "@/core/components/ui/flex";
import Grid from "@/core/components/ui/grid";
import { cn } from "@/lib/utils";
import HeroHeading from "./_components/hero-heading";
import HeroDescription from "./_components/hero-description";
import HeroButton from "./_components/hero-button";

export default function Home() {
  const BlankHeight = `pt-[0px] md:pt-[100px]`;

  return (
    <main
      className={cn(
        "min-h-screen flex items-center justify-center px-space-2",
        BlankHeight
      )}
    >
      <Grid className="grid-cols-templateColumnsMedium gap-x-space-2" gapX={4}>
        <Flex
          style={{
            gridColumn: 2,
          }}
          alignItems="center"
          justifyContent="center"
          direction="column"
          className="flex-1 min-w-0"
        >
          <HeroHeading />
          <HeroDescription />
          <HeroButton />
        </Flex>
      </Grid>
    </main>
  );
}
