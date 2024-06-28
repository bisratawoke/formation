"use client";

import { Stack } from "@mui/material";
import AddInputFieldButton from "./AddInputFieldButton";
import { Delete } from "@mui/icons-material";
import { StyledIcon } from "./StyledIcon";

export default function InputFieldUtils() {
  return (
    <Stack direction={"row"} sx={{ position: "relative", right: 25 }}>
      <StyledIcon>
        <Delete />
      </StyledIcon>

      <StyledIcon>
        <AddInputFieldButton />
      </StyledIcon>
    </Stack>
  );
}
