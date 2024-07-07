"use client";

import {
  Button,
  InputBase,
  TextField,
  TextFieldProps,
  styled,
} from "@mui/material";

export const LargeTextInput = styled(InputBase)<TextFieldProps>(
  ({ theme }) => ({
    width: "400px",
    height: "500px",
    lineHeight: "44px",
    textColor: "rgb(55, 53, 47)",
    "& .MuiInputBase-input": {
      lineHeight: "100px",
      padding: "0",
      boxSizing: "border-box",
    },
  })
);
