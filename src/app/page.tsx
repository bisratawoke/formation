import {
  Box,
  Button,
  ButtonProps,
  Grid,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { CreateNewFormButton } from "@/components/RightIconButton";
import { ArrowForward, ArrowRight } from "@mui/icons-material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
export default function Home() {
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        paddingTop: "120px",
      }}
      spacing={"80px"}
    >
      <Stack spacing="32px" alignItems={"center"}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "64px",
            lineHeight: "64px",
            color: "rgb(0,0,0)",
          }}
        >
          The simplest way to create forms
        </Typography>
        <Stack alignItems="center">
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "22px",
              lineHeight: "28px",
              color: "rgb(55, 53, 47)",
            }}
          >
            Say goodbye to boring forms. Meet Tally — the free,
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "22px",
              lineHeight: "28px",
              color: "rgb(55, 53, 47)",
            }}
          >
            intuitive form builder you’ve been looking for.
          </Typography>
        </Stack>
      </Stack>
      <CreateNewFormButton variant="contained" endIcon={<ArrowForward />}>
        Create new form
      </CreateNewFormButton>
    </Stack>
  );
}
