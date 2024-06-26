"use client";

import { AppBar, Box, Toolbar, Typography, Stack } from "@mui/material";

export default function TopNav() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box flexGrow={1}>
          <Typography
            sx={{
              fontSize: "16x",
              fontWeight: "bold",
              lineHeight: "8px",
            }}
          >
            Formation
          </Typography>
        </Box>
        <Stack direction="column"></Stack>
      </Toolbar>
    </AppBar>
  );
}
