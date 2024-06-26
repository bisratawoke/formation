import { LargeTextInput } from "@/components/LargeTextInput";
import { Box, Grid, Stack, Typography } from "@mui/material";

export default function Page() {
  return (
    <Stack
      sx={{
        paddingTop: "104px",
        paddingLeft: "304px",
        paddingRight: "304px",
      }}
    >
      <LargeTextInput
        placeholder="Form Title"
        variant="outlined"
      ></LargeTextInput>
    </Stack>
  );
}
