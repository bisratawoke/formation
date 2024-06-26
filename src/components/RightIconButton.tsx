"use client";

import { Button, ButtonProps, styled } from "@mui/material";

export const RightIconButton = styled(Button)<ButtonProps>(({ theme }) => ({
  "&:hover": {
    scale: 1,
  },
}));
