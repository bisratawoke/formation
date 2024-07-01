"use client";

import { Stack, TextField, TextareaAutosize, Typography } from "@mui/material";
import FieldCreationFormContainer from "./FieldCreationFormContainer";
import { BodyText } from "./FormInputSelectionDrawerDefaultContent";

export default function LongAnswerFieldCreationForm() {
  return (
    <FieldCreationFormContainer
      title={"Long answer"}
      helperTextContainer={
        <Stack>
          <BodyText>Use this for long form answers without</BodyText>
          <BodyText>character limits.</BodyText>
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
            Tell us a bit more about yourself
          </Typography>
          <TextField multiline variant="outlined" disabled minRows={5} />
        </Stack>
      }
    />
  );
}
