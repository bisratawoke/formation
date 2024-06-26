"use client";

import { Button, ButtonProps, styled } from "@mui/material";

export const CreateNewFormButton = styled(Button)<ButtonProps>(({ theme }) => ({
  "&:hover": {
    scale: 1,
  },
}));
