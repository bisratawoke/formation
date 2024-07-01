"use client";

import { AddCircleRounded } from "@mui/icons-material";
import { Stack, Typography, TypographyProps, styled } from "@mui/material";

export const BodyText = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: 400,
  color: "rgb(55, 53, 47)",
}));

export default function FormInputSelectionDrawerDefaultContent() {
  return (
    <Stack
      alignItems="center"
      justifyContent={"center"}
      spacing={2}
      sx={{
        height: "100%",
      }}
    >
      <Stack alignItems={"center"} justifyContent={"center"} spacing={4}>
        <AddCircleRounded />
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "18px",
            color: "rgb(55, 53, 47)",
          }}
        >
          Insert anything
        </Typography>
      </Stack>
      <Stack alignItems="center" justifyContent="center" spacing={1}>
        <BodyText>Search for any input field or layout</BodyText>
        <BodyText>option. Use ↑ and ↓ to browse the</BodyText>
        <BodyText>list, then hit Enter to insert the</BodyText>
        <BodyText>selected block.</BodyText>
      </Stack>
    </Stack>
  );
}
