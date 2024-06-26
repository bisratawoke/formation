"use client";

import { AppBar, Box, Toolbar, Typography, Stack, Avatar } from "@mui/material";
import { useSession } from "next-auth/react";
import { OutlinedButton } from "./OutlinedButton";
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
              lineHeight: "8px",
              color: "black",
            }}
          >
            Formation
          </Typography>
        </Box>
        <Stack direction="column">
          {!session ? (
            <OutlinedButton variant="outlined">Signin</OutlinedButton>
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
