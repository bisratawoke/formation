import FormInputListContainer from "@/components/FormInputListContainer";
import { Stack } from "@mui/material";

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
