"use client";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Box,
  Collapse,
  IconButton,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import { Add, Edit } from "@mui/icons-material";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import UpdateIcon from "@mui/icons-material/Update";
import { InputFieldContext } from "./InputField";
import { useContext, useState } from "react";
import { CreateFormContext, formField } from "./FormInputListContainer";

export default function InputFieldUtilsMenu({
  setOpenDrawer,
  key,
}: {
  setOpenDrawer: React.Dispatch<React.SetStateAction<Boolean>>;
  key?: number;
}) {
  const [editName, setEditName] = useState<boolean | undefined>(false);
  const { attribute } = useContext(InputFieldContext);
  const { setFormFields } = useContext(CreateFormContext);
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

  const updateFieldName = (items: formField[], name: string) => {
    return items.reduce((acc: any, val: any) => {
      if (val.id == attribute.id) {
        val.name = `${name}`;
        val.label = `${name}`;
      }
      return [...acc, val];
    }, []);
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
        {attribute ? (
          <MenuItem>
            <Stack>
              <Stack direction="row" spacing={1}>
                <ListItemText>{attribute.name}</ListItemText>

                <Edit
                  onClick={() => {
                    setEditName(true);
                  }}
                />
              </Stack>
              <Collapse in={editName} timeout={600}>
                <TextField
                  size="small"
                  onChange={(e) => {
                    setFormFields((state: formField[]) =>
                      updateFieldName(state, e.target.value)
                    );
                  }}
                  value={attribute.name}
                ></TextField>
              </Collapse>
            </Stack>
          </MenuItem>
        ) : (
          <></>
        )}
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
