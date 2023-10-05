import { cva } from "class-variance-authority";

export const StyledButton = cva(
  `
    appearance-none
    select-none
    flex
    justify-center
    items-center
    shrink-0
    outline-none
    cursor-pointer
    border-0
    text-font-size-2
    font-font-weight-3
    h-11
    w-max
    p-[11px_16px]
    [transition:background_0.2s,transform_0.2s,color_0.2s,box-shadow_0.3s]
    rounded-[var(--border-radius-1)]
    bg-[--background,white]
    text-[--color,black]
    scale-[--button-scale,1]
    translate-z-0
    [box-shadow:var(--shadow,none)]
    opacity-[--opacity,1]
    [--shadow-hover-primary:0_2px_40px_-4px_var(--knightscale-form-input-focus)]

    active:[--button-scale:0.95]
    disabled:[cursor:not-allowed]
  `,

  {
    variants: {
      variant: {
        primary: `
        [--background:var(--knightscale-colors-brand)]
        [--color:hsl(var(--palette-gray-00))]

        disabled:[--background:var(--knightscale-form-input-disabled)]
        disabled:[--color:var(--knightscale-colors-typeface-tertiary)]

        hover:[&:not(:disabled)]:[--shadow:var(--shadow-hover-primary)]

        [&:focus-visible]:[--shadow:var(--shadow-hover-primary)]
        `,

        secondary: `
        [--background:var(--knightscale-colors-emphasis)]
        [--color:var(--knightscale-colors-brand)]

        disabled:[--background:var(--knightscale-form-input-disabled)]
        disabled:[--color:var(--knightscale-colors-typeface-tertiary)]

        hover:[&:not(:disabled)]:[--shadow:var(--shadow-hover-primary)]

        [&:focus-visible]:[--shadow:var(--shadow-hover-primary)]
        `,
      },
    },
  }
);

export const StyledIconButton = cva(
  `
    appearance-none
    select-none
    flex
    justify-center
    items-center
    shrink-0
    outline-none
    cursor-pointer
    border-0

    bg-transparent
    [transition:color_0.2s_ease,transform_0.3s_ease]
    rounded-[var(--border-radius-1)]
    text-[var(--color,var(--knightscale-colors-typeface-tertiary))]
    scale-[--button-content-scale,1]
    translate-z-0

    [--shadow-hover-primary:0_2px_40px_-4px_var(--knightscale-form-input-focus)]


    after:absolute
    after:z-[1]
    after:block
    after:w-full
    after:h-full
    after:rounded-[var(--corner,var(--border-radius-1))]
    after:[transition:box-shadow_0.3s_ease,border-color_0.2s,background_0.3s_ease,transform_0.3s_cubic-bezier(0.34,1.56,0.65,1)]
    after:bg-[var(--background,var(--knightscale-colors-foreground))]
    after:scale-[var(--button-background-scale,1)]
    after:translate-z-0
    after:[border:var(--border-thickness,1px)_solid_var(--border-color,transparent)]
    after:[box-shadow:var(--shadow,none)]


    disabled:cursor-not-allowed
    disabled:bg-[var(--knightscale-form-input-disabled)]
    disabled:text-[var(--knightscale-colors-typeface-tertiary)]

    hover:[&:not(:disabled)]:[--border-color:var(--knightscale-colors-brand)]
    hover:[&:not(:disabled)]:[--border-thickness:2px]
    hover:[&:not(:disabled)]:[--color:var(--knightscale-colors-brand)]
    hover:[&>svg]:[--color:var(--knightscale-colors-brand)]
    hover:[&:not(:disabled)]:[--corner:calc(var(--border-radius-1)+2px)]
    hover:[&:not(:disabled)]:[--button-background-scale:0.92]
    hover:[&:not(:disabled)]:[--shadow:var(--shadow-hover-primary)]

    [&:focus-visible]:[--border-color:var(--knightscale-colors-brand)]
    [&:focus-visible]:[--border-thickness:2px]
    [&:focus-visible]:[--color:var(--knightscale-colors-brand)]
    [&:focus-visible]:[--corner:calc(var(--border-radius-1)+2px)]
    [&:focus-visible]:[--button-background-scale:0.92]
    [&:focus-visible]:[--shadow:var(--shadow-hover-primary)]

    active:[--button-content-scale:0.95]
  `,

  {
    variants: {
      size: {
        small: `w-[32px] h-[32px] [&>svg]:w-4 [&>svg]:h-4`,
        large: `w-[44px] h-[44px] [&>svg]:w-[22px] [&>svg]:h-[22px]`,
      },
    },
    defaultVariants: {
      size: "large",
    },
  }
);
