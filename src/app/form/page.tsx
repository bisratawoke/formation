import FormInputListContainer from "@/components/FormInputListContainer";
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
      <FormInputListContainer />
    </Stack>
  );
}
