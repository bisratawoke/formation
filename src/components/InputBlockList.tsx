"use client";

import { InputBlockType } from "./FormFieldSelectionDrawer";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import MenuIcon from "@mui/icons-material/Menu";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import NumbersIcon from "@mui/icons-material/Numbers";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkIcon from "@mui/icons-material/Link";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { FormFieldContext } from "./FormFieldSelectionDrawer";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { grey, pink } from "@mui/material/colors";
import ShortAnswerFieldCreationForm from "./ShortAnswerFieldCreationForm";

export default function InputBlockList() {
  const theme: any = useTheme();
  const { setSelectedFieldContent, currentField, setCurrentField } =
    useContext(FormFieldContext);
  const inputBlock: InputBlockType[] = [
    {
      name: "Short answer",
      icon: <DragHandleIcon />,
      onClick: () => {
        setCurrentField("Short answer");
        setSelectedFieldContent(<ShortAnswerFieldCreationForm />);
      },
    },
    { name: "Long answer", icon: <MenuIcon /> },
    { name: "Multiple choice", icon: <CheckCircleOutlineIcon /> },
    { name: "Checkboxes", icon: <CheckBoxOutlineBlankIcon /> },
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
            backgroundColor:
              inputBlock.name == currentField ? grey[300] : "white",
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
