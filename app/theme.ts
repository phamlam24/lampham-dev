"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

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
});
export default darkTheme;
