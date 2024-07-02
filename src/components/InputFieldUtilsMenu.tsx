"use client";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, IconButton, ListItemIcon, ListItemText } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import { Add } from "@mui/icons-material";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import UpdateIcon from "@mui/icons-material/Update";
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
    setAnchorEl(null);
  };

  const handleItemClick = () => {
    setOpenDrawer(true);
    handleClose();
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
        <MenuItem onClick={handleItemClick}>
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText>Add form field</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleItemClick}>
          <ListItemIcon>
            <UpdateIcon />
          </ListItemIcon>
          <ListItemText>Update form field</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleItemClick}>
          <ListItemIcon>
            <ContentCutIcon />
          </ListItemIcon>
          <ListItemText>Delete form field</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
}
