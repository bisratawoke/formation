"use client";

import { Button, ButtonProps, styled } from "@mui/material";

export const TextButton = styled(Button)<ButtonProps>(({ theme }) => ({
  fontSize: "14px",
  lineHeight: "16px",
  fontWeight: 600,
  color: "rgb(55, 53, 47)",
}));
