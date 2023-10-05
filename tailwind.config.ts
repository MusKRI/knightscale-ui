import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/core/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ks-brand": "var(--knightscale-colors-brand)",
        "ks-body": "var(--knightscale-colors-body)",
        "ks-header": "var(--knightscale-colors-header)",
        "ks-emphasis": "var(--knightscale-colors-emphasis)",
        "ks-foreground": "var(--knightscale-colors-foreground)",
        "ks-danger": "var(--knightscale-colors-danger)",
        "ks-danger-emphasis": "var(--knightscale-colors-danger-emphasis)",
        "ks-warning": "var(--knightscale-colors-warning)",
        "ks-warning-emphasis": "var(--knightscale-colors-warning-emphasis)",
        "ks-success": "var(--knightscale-colors-success)",
        "ks-success-emphasis": "var(--knightscale-colors-success-emphasis)",
        "ks-typeface-primary": "var(--knightscale-colors-typeface-primary)",
        "ks-typeface-secondary": "var(--knightscale-colors-typeface-secondary)",
        "ks-typeface-tertiary": "var(--knightscale-colors-typeface-tertiary)",
        "ks-typeface-danger": "var(--knightscale-colors-typeface-danger)",
        "ks-border-color": "var(--knightscale-border-color)",
        "ks-card-background-color": "var(--knightscale-card-background-color)",
        "ks-form-input-active": "var(--knightscale-form-input-active)",
        "ks-form-input-disabled": "var(--knightscale-form-input-disabled)",
        "ks-form-input-border": "var(--knightscale-form-input-border)",
        "ks-form-input-focus": "var(--knightscale-form-input-focus)",
        "shadow-color": "var(--shadow-color)",
        "code-snippet-background": "var(--code-snippet-background)",
        "token-comment": "var(--token-comment)",
        "token-selector": "var(--token-selector)",
        "token-symbol": "var(--token-symbol)",
        "token-keyword": "var(--token-keyword)",
        "token-function": "var(--token-function)",
        "token-punctuation": "var(--token-punctuation)",
      },
      spacing: {
        "space-0": "var(--space-0)",
        "space-1": "var(--space-1)",
        "space-2": "var(--space-2)",
        "space-3": "var(--space-3)",
        "space-4": "var(--space-4)",
        "space-5": "var(--space-5)",
        "space-6": "var(--space-6)",
        "space-7": "var(--space-7)",
        "space-8": "var(--space-8)",
        "space-9": "var(--space-9)",
        "space-10": "var(--space-10)",
        "space-11": "var(--space-11)",
        "space-12": "var(--space-12)",
        "space-13": "var(--space-13)",
        "space-14": "var(--space-14)",
        "space-15": "var(--space-15)",
      },
      fontSize: {
        "font-size-1": `var(--font-size-1)`,
        "font-size-2": `var(--font-size-2)`,
        "font-size-3": `var(--font-size-3)`,
        "font-size-4": `var(--font-size-4)`,
        "font-size-5": `var(--font-size-5)`,
        "font-size-6": `var(--font-size-6)`,
        "font-size-7": `var(--font-size-7)`,
      },
      fontWeight: {
        "font-weight-1": `var(--font-weight-1)`,
        "font-weight-2": `var(--font-weight-2)`,
        "font-weight-3": `var(--font-weight-3)`,
        "font-weight-4": `var(--font-weight-4)`,
      },
      gridTemplateColumns: {
        templateColumnsSmall: `1fr minmax(auto, 700px) 1fr`,
        templateColumnsMedium: `1fr minmax(auto, 1080px) 1fr`,
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "translate-z": (value) => ({
            "--tw-translate-z": value,
            transform: ` translate3d(var(--tw-translate-x), var(--tw-translate-y), var(--tw-translate-z)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))`,
          }), // this is actual CSS
        },
        { values: theme("translate"), supportsNegativeValues: true }
      );
    }),
  ],
};
export default config;
