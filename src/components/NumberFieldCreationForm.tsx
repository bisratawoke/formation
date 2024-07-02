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

export default function NumberFieldCreationForm() {
  return (
    <FieldCreationFormContainer
      title={"Number"}
      helperTextContainer={
        <Stack spacing={1}>
          <BodyText>Use this if you want a number as a</BodyText>
          <BodyText>response. Add a minimum and/or maximum</BodyText>
          <BodyText>number limit.</BodyText>
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
            Number of employees
          </Typography>
          <TextField variant="outlined" disabled size="small" value="15" />
        </Stack>
      }
    />
  );
}
