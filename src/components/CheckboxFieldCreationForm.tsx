"use client";

import { Box, Stack, Typography, TypographyProps, styled } from "@mui/material";
import FieldCreationFormContainer from "./FieldCreationFormContainer";
import { BodyText } from "./FormInputSelectionDrawerDefaultContent";
import { CheckBox } from "@mui/icons-material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const Text = styled(Typography)<TypographyProps>(() => ({
  color: "rgb(55, 53, 47)",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "18px",
}));

export default function CheckboxFieldCreationForm() {
  return (
    <FieldCreationFormContainer
      title={"Checkboxes"}
      helperTextContainer={
        <Stack>
          <BodyText>Use this to offer a range of answers to a</BodyText>
          <BodyText>question. Respondents can select multiple</BodyText>
          <BodyText>answers.</BodyText>
        </Stack>
      }
      exampleContainer={
        <Stack spacing={2} alignItems={"start"}>
          <Stack direction="row" alignItems={"center"} spacing={1}>
            <CheckBoxOutlineBlankIcon />
            <Text>Social media</Text>
          </Stack>
          <Stack direction="row" alignItems={"center"} spacing={1}>
            <CheckBoxOutlineBlankIcon />
            <Text>Google</Text>
          </Stack>
          <Stack direction="row" alignItems={"center"} spacing={1}>
            <CheckBoxOutlineBlankIcon />
            <Text>Co-workers</Text>
          </Stack>
        </Stack>
      }
    />
  );
}
