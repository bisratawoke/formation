"use client";

import { ArrowForward } from "@mui/icons-material";
import { Stack, TextField, Typography } from "@mui/material";
import { BodyText } from "./FormInputSelectionDrawerDefaultContent";
import FieldCreationFormContainer from "./FieldCreationFormContainer";

export default function ShortAnswerFieldCreationForm() {
  return (
    <FieldCreationFormContainer
      title={" Short answer"}
      helperTextContainer={
        <Stack spacing={1}>
          <BodyText>Use this for short text answers. Add an</BodyText>
          <BodyText>answer label or placeholder text </BodyText>
          <BodyText>for guidance.</BodyText>
        </Stack>
      }
      exampleContainer={
        <Stack spacing={1}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              color: "rgb(55,53,47)",
              lineHeight: "18px",
            }}
          >
            First name
          </Typography>
          <TextField variant="outlined" disabled size="small" />
          <TextField
            variant="outlined"
            disabled
            size="small"
            placeholder="First name"
          />
        </Stack>
      }
    />
  );
}
