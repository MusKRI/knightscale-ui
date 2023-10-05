"use client";

// **** Library Imports ****
import { Variants, motion } from "framer-motion";
import Link from "next/link";

// **** Local Imports ****
import { default as Grid } from "../ui/grid";
import Flex from "../ui/flex";
import { HeaderProps } from "./types";

import useScrollCounter from "@/core/hooks/useScrollCounter";
import ModeToggle from "../mode-toggle/ModeToggle";
import ToggleMenu from "../mode-toggle/ToggleMenu";
import { cn } from "@/lib/utils";

const headerVariants: Variants = {
  open: {
    height: 120,
    transition: { ease: "easeInOut", duration: 0.3 },
  },
  collapsed: {
    height: 60,
    transition: { ease: "easeInOut", duration: 0.3, delayChildren: 0.5 },
  },
};

const Header = (props: HeaderProps) => {
  const { title, offsetHeight = 120, showProgressBarOnMobile } = props;

  const reached = useScrollCounter(offsetHeight / 2);

  const BlankHeight = `h-[120px] md:h-[120px]`;

  return (
    <>
      <motion.header
        className="Header_Wrapper fixed z-10 top-0 backdrop-blur-[8px] w-full [transition:background-color_0.5s,border-color_0.5s] bg-ks-header border-b h-16"
        initial="open"
        animate={reached ? "collapsed" : "open"}
        variants={headerVariants}
        style={{
          borderColor: reached
            ? "var(--knightscale-border-color)"
            : "transparent",
        }}
      >
        <Grid
          gapX={4}
          className="grid-cols-templateColumnsMedium h-full gap-x-space-2"
        >
          <Flex
            style={{
              gridColumn: 2,
            }}
            alignItems="center"
            justifyContent="space-between"
            className="flex-1 min-w-0"
          >
            <Flex className="flex-1 min-w-0">
              <span>
                <Link href="/" className="text-xl font-semibold">
                  knightscale/ui
                </Link>
              </span>
            </Flex>

            <Flex gap={3}>
              <ModeToggle />
              <ToggleMenu />
            </Flex>
          </Flex>
        </Grid>
      </motion.header>
      <div className={cn(BlankHeight)}></div>
    </>
  );
};

export default Header;
