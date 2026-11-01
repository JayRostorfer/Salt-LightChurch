"use client";

import {
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: "var(--font-poppins)",

    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.7,
    },

    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.7,
    },

    subtitle1: {
      fontSize: "1.125rem",
      fontWeight: 500,
    },

    subtitle2: {
      fontSize: "1rem",
      fontWeight: 500,
    },
  },
});

// Responsive typography
theme = responsiveFontSizes(theme, {
  breakpoints: ["sm", "md", "lg"],
  factor: 2,
  variants: [
    "body1",
    "body2",
    "subtitle1",
    "subtitle2",
  ],
});

export default theme;
