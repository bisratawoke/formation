"use client";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, IconButton } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
export default function InputFieldUtilsMenu({
  setOpenDrawer,
}: {
  setOpenDrawer: React.Dispatch<React.SetStateAction<Boolean>>;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setOpenDrawer(true);
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <AppsIcon />
      </IconButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Add form field</MenuItem>
        <MenuItem onClick={handleClose}>Update form field</MenuItem>
        <MenuItem onClick={handleClose}>Delete form field</MenuItem>
      </Menu>
    </Box>
  );
}
