import React, { ForwardedRef, forwardRef } from "react";

import { AtSignIcon, EyeIcon, Tick } from "./TextInputIcons";
import { TextInputProps, TextInputWrapperProps } from "./TextInput.types";
import { TextInputWrapper, TextInputVariants } from "./TextInput.variants";
import { cn } from "@/lib/utils";

const StyledInputWrapper = forwardRef<HTMLDivElement, TextInputWrapperProps>(
  (props: TextInputWrapperProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { className, variant, children, ...rest } = props;

    return (
      <div
        ref={ref}
        className={cn(TextInputWrapper({ className, variant }))}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props: TextInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const { type = "text", variant, className, disabled, ...rest } = props;

    const [showPassword, setShowPassword] = React.useState(false);

    const computedType = React.useCallback(() => {
      if (type === "password" && showPassword) {
        return "text";
      }
      return type;
    }, [showPassword, type]);

    return (
      <StyledInputWrapper variant={type}>
        <div className="relative">
          <input
            ref={ref}
            type={computedType()}
            className={cn(TextInputVariants({ className, variant }))}
            disabled={disabled}
            {...rest}
          />

          {type === "email" && (
            <>
              <AtSignIcon classes="" />
              <Tick />
            </>
          )}

          {type === "password" && (
            <>
              <button
                aria-label="Reveal Password"
                className={showPassword ? "clicked" : ""}
                data-testid="reveal-password-button"
                disabled={disabled}
                onClick={() => setShowPassword((prev) => !prev)}
                type="button"
              >
                <EyeIcon />
              </button>
            </>
          )}
        </div>
      </StyledInputWrapper>
    );
  }
);

export default TextInput;
