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

export default function ShortAnswerFieldCreationForm() {
  return (
    <Stack
      sx={{
        height: "100%",
        padding: "24px",
        paddingTop: "40px",
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
      <Stack
        spacing={4}
        sx={{
          marginTop: "48px",
        }}
      >
        <Divider />
        <Box alignItems="center">
          <Chip
            label="Example"
            sx={{
              fontSize: "12px",
              fontWeight: 600,
              color: "rgb(137, 136, 132)",
              lineHeight: "12px",
            }}
          />
        </Box>
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
      </Stack>
    </Stack>
  );
}
