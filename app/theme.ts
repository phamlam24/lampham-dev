"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xl2: true;
  }
}

const darkTheme = createTheme({
  typography: {
    fontFamily: [
      GeistSans.variable,
      GeistMono.variable,
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    mode: "dark",

  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xl2: 1536,
    }
  }
});
export default darkTheme;
