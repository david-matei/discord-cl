import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
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
  plugins: [],
} satisfies Config;
