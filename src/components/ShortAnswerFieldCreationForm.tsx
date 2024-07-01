"use client";

import { ArrowForward } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { BodyText } from "./FormInputSelectionDrawerDefaultContent";

export default function ShortAnswerFieldCreationForm() {
  return (
    <Stack
      justifyContent={"space-between"}
      sx={{
        height: "100%",
        padding: "24px",
      }}
    >
      <Stack>
        <Stack spacing={4}>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "23px",
                color: "rgb(55, 53, 47)",
              }}
            >
              Short answer
            </Typography>
            <Button endIcon={<ArrowForward />} variant="contained" size="small">
              Insert
            </Button>
          </Stack>
          <Stack spacing={1}>
            <BodyText>Use this for short text answers. Add an</BodyText>
            <BodyText>answer label or placeholder text </BodyText>
            <BodyText>for guidance.</BodyText>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
