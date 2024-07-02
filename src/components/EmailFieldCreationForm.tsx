"use client";

import { ArrowForward } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { BodyText } from "./FormInputSelectionDrawerDefaultContent";
import FieldCreationFormContainer from "./FieldCreationFormContainer";

export default function EmailFieldCreationForm() {
  return (
    <FieldCreationFormContainer
      title={"Number"}
      helperTextContainer={
        <Stack spacing={1}>
          <BodyText>Use this to collect correctly formatted email</BodyText>
          <BodyText>addresses as answers. If someone tries to</BodyText>
          <BodyText>add text in the wrong format, they will have</BodyText>
          <BodyText>to try again.</BodyText>
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
            Email
          </Typography>
          <TextField
            variant="outlined"
            disabled
            size="small"
            value="john@doe.com"
          />
        </Stack>
      }
    />
  );
}
