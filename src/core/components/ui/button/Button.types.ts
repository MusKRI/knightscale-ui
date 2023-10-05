import { ForwardRefComponent } from "framer-motion";
import type { VariantProps } from "class-variance-authority";

import { StyledButton, StyledIconButton } from "./Button.variants";

export type MainButtonVariant = "primary" | "secondary";
export type IconButtonVariant = "icon";

interface BaseButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  as?: ForwardRefComponent<HTMLButtonElement, any>;
  type?: "button" | "reset" | "submit";
}

interface MainButtonProps
  extends BaseButtonProps,
    VariantProps<typeof StyledButton> {
  variant: MainButtonVariant;
  icon?: never;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

interface IconButtonProps
  extends BaseButtonProps,
    VariantProps<typeof StyledIconButton> {
  variant: IconButtonVariant;
  icon?: React.ReactNode;
  startIcon?: never;
  endIcon?: never;
}

export type ButtonProps<T> = (MainButtonProps | IconButtonProps) & T;
