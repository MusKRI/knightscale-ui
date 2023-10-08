import type { VariantProps } from "class-variance-authority";

import { TextInputVariants, TextInputWrapper } from "./TextInput.variants";
import { HTMLAttributes } from "react";

export type TextInputTypes = "email" | "password" | "text";

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">,
    VariantProps<typeof TextInputVariants> {
  type?: TextInputTypes;
  label?: React.ReactNode;
  value?: string;
  id: string;
  onChange: React.FormEventHandler<HTMLInputElement>;
}

export interface TextInputWrapperProps
  extends VariantProps<typeof TextInputWrapper>,
    HTMLAttributes<HTMLDivElement> {}
