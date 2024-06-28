"use client";
import { styled } from "@mui/material";

export const StyledIcon = styled("div")(({ theme }) => ({
  display: "inline-flex",
  color: theme.palette.primary.main,
  fontSize: "40px",
  transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    color: theme.palette.secondary.main,
    transform: "scale(1.1)",
  },
}));
