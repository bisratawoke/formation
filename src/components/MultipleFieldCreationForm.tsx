"use client";

import {
  Avatar,
  Chip,
  ChipProps,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import FieldCreationFormContainer from "./FieldCreationFormContainer";
import { BodyText } from "./FormInputSelectionDrawerDefaultContent";

const StyledChip = styled(Chip)<ChipProps>(() => ({
  fontSize: "16px",
  fontWeight: 400,
  color: "rgb(55, 53, 47)",
  lineHeight: "18px",
  paddingTop: "24px",
  paddingBottom: "24px",
}));
export default function MultipleFieldCreationForm() {
  return (
    <FieldCreationFormContainer
      title={"Multiple choice"}
      helperTextContainer={
        <Stack>
          <BodyText>Use this to offer a range of answer options.</BodyText>
          <BodyText>Respondents can only choose one answer.</BodyText>
        </Stack>
      }
      exampleContainer={
        <Stack spacing={2} alignItems={"start"}>
          <StyledChip icon={<Avatar sizes="small">A</Avatar>} label="Small" />
          <StyledChip icon={<Avatar sizes="small">B</Avatar>} label="Medium" />
          <StyledChip icon={<Avatar sizes="small">C</Avatar>} label="Large" />
        </Stack>
      }
    />
  );
}
