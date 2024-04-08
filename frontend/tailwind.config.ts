import type { Config } from "tailwindcss";
import formsPlugin from "@tailwindcss/forms";
import headlessPlugin from "@headlessui/tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.5rem" }],
      base: ["1rem", { lineHeight: "1.75rem" }],
      lg: ["1.125rem", { lineHeight: "2rem" }],
      xl: ["1.25rem", { lineHeight: "2rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["2rem", { lineHeight: "2.5rem" }],
      "4xl": ["2.5rem", { lineHeight: "3.5rem" }],
      "5xl": ["3rem", { lineHeight: "3.5rem" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1.1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
    },
    extend: {
      screens: {
        mobile: "990px",
      },
      spacing: {
        sections: "2rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      fontFamily: {
        sans: "var(--font-inter)",
        display: "var(--font-lexend)",
      },
      textColor: {
        primary: colors.gray[900],
        secondary: colors.gray[500],
        "theme-primary": colors.indigo[600],
        "theme-secondary": colors.indigo[500],
        "theme-emphasize": colors.indigo[900],
        "red-primary": colors.red[600],
        "red-secondary": colors.red[500],
      },
      width: {
        menu: "17rem",
        "menu-collapse": "4rem",
      },
      minWidth: {
        menu: "17rem",
      },
      maxWidth: {
        menu: "17rem",
        "2xl": "40rem",
        "big-screen": "100rem",
      },
    },
  },
  important: true,
  plugins: [formsPlugin, headlessPlugin],
} satisfies Config;
