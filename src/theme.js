"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    
    fontFamily: "var(--font-poppins)",

    // Paragraphes
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

    // Sous-titres
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

export default theme;
