"use client";

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Stack,
  Avatar,
  Button,
} from "@mui/material";
import { useSession } from "next-auth/react";
import { OutlinedButton } from "./OutlinedButton";
import { TextButton } from "./TextButton";
export default function TopNav() {
  const { data: session } = useSession();
  return (
    <AppBar position="static" elevation={0}>
      <Toolbar
        sx={{
          backgroundColor: "white",
        }}
      >
        <Box flexGrow={1}>
          <Typography
            sx={{
              fontSize: "16x",
              fontWeight: "bold",
              lineHeight: "18px",
              color: "rgb(0, 0, 238)",
            }}
          >
            Formation
          </Typography>
        </Box>
        <Stack direction="column">
          {!session ? (
            <Stack direction="row" spacing={"8px"}>
              <TextButton>Log in</TextButton>
              <TextButton>Sign up</TextButton>
              <Button variant="contained" size="small">
                Create Form
              </Button>
            </Stack>
          ) : (
            <>
              <Avatar>BA</Avatar>
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
