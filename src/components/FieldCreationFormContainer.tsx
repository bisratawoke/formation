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

export default function FieldCreationFormContainer({
  title,
  helperTextContainer,
  exampleContainer,
}: {
  title: string;
  helperTextContainer: React.ReactNode;
  exampleContainer: React.ReactNode;
}) {
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
              {title}
            </Typography>
            <Button endIcon={<ArrowForward />} variant="contained" size="small">
              Insert
            </Button>
          </Stack>
          <Stack spacing={1}>{helperTextContainer}</Stack>
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
        {exampleContainer}
      </Stack>
    </Stack>
  );
}
