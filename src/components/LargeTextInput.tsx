"use client";

import { Button, TextField, TextFieldProps, styled } from "@mui/material";

export const LargeTextInput = styled(TextField)<TextFieldProps>(
  ({ theme }) => ({
    size: "40px",
    lineHeight: "44px",
    textColor: "rgb(55, 53, 47)",
  })
);
