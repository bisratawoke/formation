"use client";
import { Stack, Typography } from "@mui/material";
import { CreateNewFormButton } from "@/components/RightIconButton";
import { ArrowForward } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        paddingTop: "120px",
      }}
      spacing={"68px"}
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
      <Stack
        direction="column"
        alignItems="center"
        justifyContent={"center"}
        spacing={"12px"}
      >
        <CreateNewFormButton
          variant="contained"
          endIcon={<ArrowForward />}
          onClick={() => {
            router.push("form");
          }}
        >
          Create new form
        </CreateNewFormButton>
        <Typography
          sx={{
            fontSize: "13px",
            lineHeight: "15px",
            color: "rgb(69, 67, 62)",
            weight: 400,
          }}
        >
          No signup required
        </Typography>
      </Stack>
    </Stack>
  );
}
