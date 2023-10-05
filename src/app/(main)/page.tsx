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
        "min-h-screen flex items-center justify-center px-space-2 relative",
        BlankHeight
      )}
    >
      <div
        className="border absolute right-[-1000px] top-auto left-[-1000px] bottom-0 pointer-events-none shrink-0 min-w-0 min-h-0 opacity-[0.1] h-[530px] -z-[1]"
        style={{
          background:
            "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoAQMAAAC2MCouAAAABlBMVEWBgYFHcEyMaNnGAAAAAnRSTlP/AOW3MEoAAAAQSURBVHgBY4CA+v9AMBJIALryrr41QoYVAAAAAElFTkSuQmCC)",
          maskImage: "linear-gradient(transparent 20%,#000)",
          WebkitMaskImage: "linear-gradient(transparent 20%,#000)",
          contain: "paint",
          backgroundPosition: "50%",
        }}
      ></div>
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

      <div className="absolute -z-[10] top-[4rem] right-[5rem] h-[16rem] w-[16rem] rounded-full blur-[15rem] bg-ks-brand"></div>
      <div className="absolute -z-[10] bottom-[4rem] left-[5rem] h-[16rem] w-[16rem] rounded-full blur-[15rem] bg-ks-success"></div>
    </main>
  );
}
