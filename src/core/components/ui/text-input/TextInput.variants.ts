import { cva } from "class-variance-authority";

export const TextInputVariants = cva(
  `
    appearance-none
    w-full
    outline-none
    relative
    block
    m-0
    [padding:var(--input-inner-padding,8px_40px_8px_16px)]
    text-font-size-2
    leading-[26px]
    text-ks-typeface-primary
    [border-radius:var(--border-radius-1)]
    [border:1px_solid_var(--border-color,var(--knightscale-form-input-focus))]
    [background:var(--background,var(--knightscale-form-input-background))]
    [transition:border-color_0.3s,box-shadow_0.3s]
    placeholder:text-ks-typeface-tertiary
    placeholder:opacity-50
    autofill:bg-transparent
    disabled:[--background:var(--knightscale-form-input-disabled)]
    disabled:cursor-not-allowed
    disabled:opacity-[65]
  `,

  {
    variants: {
      variant: {
        email: `[--input-inner-padding:8px_16px_8px_40px]`,
        password: "",
        text: "",
      },
    },
  }
);

export const TextInputWrapper = cva(
  `
    inline-block
    relative
    w-full
    [--shadow-hover-primary:0_2px_20px_-2px_var(--knightscale-form-input-focus)]

    [&_svg]:block
    [&_svg]:absolute
    [&_svg]:fill-none
    [&_svg]:stroke-[var(--icon-color,var(--knightscale-form-input-border))]
    [&_svg]:[stroke-linecap:round]
    [&_svg]:[stroke-linejoin:round]
    [&_svg]:stroke-[1.6]
    [transition:stroke_0.3s]

    [&_input]:[box-shadow:var(--shadow,none)]
    [&_input:not(:placeholder-shown):not(:disabled):not(:focus)_svg]:[--icon-color:var(--knightscale-form-input-active)]
    [&_input:not(:placeholder-shown):not(:disabled):not(:focus)_button_svg]:[--icon-color:var(--knightscale-form-input-active)]

    [&:hover_input:not(:disabled)]:[--shadow:var(--shadow-hover-primary)]
    [&:hover_input:not(:disabled)]:[--border-color:var(--knightscale-form-input-active)]
    [&:hover_input:not(:disabled)+svg]:[--icon-color:var(--knightscale-form-input-active)]
    [&:hover_input:not(:disabled)+button_svg]:[--border-color:var(--knightscale-form-input-active)]

    [&:focus-within]:[--border-color:var(--knightscale-form-input-value)]
    [&:focus-within]:[--icon-color:var(--knightscale-form-input-value)]
    [&:focus-within]:[--shadow:var(--shadow-hover-primary)]

  `,

  {
    variants: {
      variant: {
        email: `[&_svg]:top-[12px] [&_svg]:left-[12px]`,
        password: `
          [&_button]:absolute
          appearance-none
          [&_button]:h-[22px]
          [&_button]:w-[22px]
          [&_button]:top-[12px]
          [&_button]:right-[14px]
          [&_button]:bg-none
          [&_button]:border-none
          [&_button]:cursor-pointer
          [&_button]:rounded-full
          [&_button]:outline-none
          [&_button]:[transition:box-shadow_0.2s]
          [&_button]:p-0
          [&_button_svg]:[position:initial]
          
          [&_button:disabled]:cursor-not-allowed
          [&_button.clicked]:[--eye:0]
          [&_button.clicked]:[--eye-delay:0s]
          [&_button.clicked]:[--strike:24]
          [&_button.clicked]:[--strike-delay:0s]
        `,
        text: ``,
      },
    },
  }
);
