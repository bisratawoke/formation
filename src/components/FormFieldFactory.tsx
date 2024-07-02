"use client";

import { TextField } from "@mui/material";
import TextInputContainer from "./TextInputContainer";

export enum FieldType {
  SHORT_ANSWER = "Short answer",
  LONG_ANSWER = "Long answer",
  MULTIPLE_CHOICE = "Multiple choice",
  CHECKBOXES = "Checkboxes",
  DROPDOWN = "Dropdown",
  MULTI_SELECT = "Multi-select",
  NUMBER = "Number",
  EMAIL = "Email",
  PHONE_NUMBER = "Phone number",
  LINK = "Link",
  DATE = "Date",
  TIME = "Time",
  FILE_UPLOAD = "File upload",
}

export default function FormFieldFactory({ fieldType, name, label }: any) {
  switch (fieldType) {
    case FieldType.SHORT_ANSWER:
      return (
        <TextInputContainer name={name} label={label} sx={{ width: "100%" }}>
          <TextField />
        </TextInputContainer>
      );

    case FieldType.LONG_ANSWER:
      return (
        <TextInputContainer name={name} label={label} sx={{ width: "100%" }}>
          <TextField multiline variant="outlined" minRows={5} />
        </TextInputContainer>
      );

    case FieldType.MULTIPLE_CHOICE:
      return <>Multiple choice</>;
  }
}
