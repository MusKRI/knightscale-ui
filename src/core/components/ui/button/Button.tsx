"use client";

import React from "react";
import Flex from "../flex";

import { StyledButton, StyledIconButton } from "./Button.variants";
import { ButtonProps } from "./Button.types";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(
  <T extends object>(
    props: ButtonProps<T>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const {
      variant = "primary",
      children,
      icon,
      startIcon,
      endIcon,
      className,
      ...rest
    } = props;

    if (variant === "icon") {
      return (
        <button
          ref={ref}
          className={cn(StyledIconButton({ className }))}
          {...rest}
        >
          <Flex className="z-[1]">{icon}</Flex>
        </button>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(StyledButton({ variant, className }))}
        {...rest}
      >
        {startIcon ? <Flex className="mr-space-2 gap-x-space-1">{startIcon}</Flex> : null}

        {children}

        {endIcon ? <Flex className="ml-space-2">{endIcon}</Flex> : null}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button as <T extends object>(
  props: ButtonProps<T> & { ref?: React.ForwardedRef<HTMLButtonElement> }
) => JSX.Element;
