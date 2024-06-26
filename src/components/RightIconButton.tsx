"use client";

import { Button, ButtonProps, styled } from "@mui/material";

export const CreateNewFormButton = styled(Button)<ButtonProps>(() => ({
  "&:hover": {
    scale: 1,
  },
}));
