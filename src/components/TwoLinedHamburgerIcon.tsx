"use client";

import { Icon, styled } from "@mui/material";

export const TwoLineHamburgerIcon = styled(Icon)(({ theme }) => ({
  display: "block",
  fontSize: "inherit",
  "&:before": {
    content: '"\\2630"', // Unicode for three-line hamburger icon
    display: "block",
    transform: "scaleY(0.66)", // Scale to make it appear as two lines
    lineHeight: 1,
  },
}));
