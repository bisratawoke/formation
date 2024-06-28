"use client";

import { InputBlockType } from "./FormFieldSelectionDrawer";
import { TwoLineHamburgerIcon } from "./TwoLinedHamburgerIcon";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import MenuIcon from "@mui/icons-material/Menu";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import NumbersIcon from "@mui/icons-material/Numbers";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkIcon from "@mui/icons-material/Link";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { FormFieldContext } from "./FormFieldSelectionDrawer";
import { useContext } from "react";
export default function InputBlockList() {
  const { setSelectedFieldContent } = useContext(FormFieldContext);
  const inputBlock: InputBlockType[] = [
    {
      name: "Short answer",
      icon: <DragHandleIcon />,
      onClick: () => {
        setSelectedFieldContent(<Typography>Short answer</Typography>);
      },
    },
    { name: "Long answer", icon: <MenuIcon /> },
    { name: "Multiple choice", icon: <CheckCircleOutlineIcon /> },
    { name: "Checkboxes", icon: <CheckBoxIcon /> },
    { name: "Dropdown", icon: <KeyboardArrowDownIcon /> },
    { name: "Multi-select", icon: <DoneAllIcon /> },
    { name: "Number", icon: <NumbersIcon /> },
    { name: "Email", icon: <AlternateEmailIcon /> },
    { name: "Phone number", icon: <LocalPhoneIcon /> },
    { name: "Link", icon: <LinkIcon /> },
    { name: "Date", icon: <CalendarTodayIcon /> },
    { name: "Time", icon: <AccessTimeIcon /> },
    { name: "File upload", icon: <DriveFolderUploadIcon /> },
  ];
  return (
    <Stack spacing={1}>
      <Typography
        sx={{
          fontSize: "14px",
          lineHeight: "14px",
          color: "rgb(137, 136, 132)",
          fontWeight: 600,
          padding: "16px",
        }}
      >
        Input blocks
      </Typography>
      {inputBlock.map((inputBlock: InputBlockType, indx) => (
        <ListItemButton
          key={indx}
          sx={{
            borderRadius: "8px",
          }}
          onClick={inputBlock.onClick}
        >
          <ListItemIcon>{inputBlock.icon}</ListItemIcon>
          <ListItemText>
            <Typography
              sx={{
                fontSize: "16px",
                lineHeight: "16px",
                color: "rgb(55, 53, 47)",
                fontWeight: 400,
              }}
            >
              {inputBlock.name}
            </Typography>
          </ListItemText>
        </ListItemButton>
      ))}
    </Stack>
  );
}
