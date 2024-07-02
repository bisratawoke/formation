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
import { grey } from "@mui/material/colors";
import ShortAnswerFieldCreationForm from "./ShortAnswerFieldCreationForm";
import LongAnswerFieldCreationForm from "./LongAnswerFieldCreationForm";
import MultipleFieldCreationForm from "./MultipleFieldCreationForm";
import CheckboxFieldCreationForm from "./CheckboxFieldCreationForm";
import DropDownFieldCreationForm from "./DropDownFieldCreationForm";
import NumberFieldCreationForm from "./NumberFieldCreationForm";
import EmailFieldCreationForm from "./EmailFieldCreationForm";
import MultiselectFieldCreationForm from "./MultiselectFieldCreationForm";
import { FieldType } from "./FormFieldFactory";

export default function InputBlockList() {
  const theme: any = useTheme();
  const { setSelectedFieldContent, currentField, setCurrentField } =
    useContext(FormFieldContext);
  const inputBlock: InputBlockType[] = [
    {
      name: FieldType.SHORT_ANSWER,
      icon: <DragHandleIcon />,
      onClick: () => {
        setCurrentField(FieldType.SHORT_ANSWER);
        setSelectedFieldContent(<ShortAnswerFieldCreationForm />);
      },
    },
    {
      name: FieldType.LONG_ANSWER,
      icon: <MenuIcon />,
      onClick: () => {
        setCurrentField(FieldType.LONG_ANSWER);
        setSelectedFieldContent(<LongAnswerFieldCreationForm />);
      },
    },
    {
      name: FieldType.MULTIPLE_CHOICE,
      icon: <CheckCircleOutlineIcon />,
      onClick: () => {
        setCurrentField(FieldType.MULTIPLE_CHOICE);
        setSelectedFieldContent(<MultipleFieldCreationForm />);
      },
    },
    {
      name: FieldType.CHECKBOXES,
      icon: <CheckBoxOutlineBlankIcon />,
      onClick: () => {
        setCurrentField(FieldType.CHECKBOXES);
        setSelectedFieldContent(<CheckboxFieldCreationForm />);
      },
    },
    {
      name: FieldType.DROPDOWN,
      icon: <KeyboardArrowDownIcon />,
      onClick: () => {
        setCurrentField(FieldType.DROPDOWN);
        setSelectedFieldContent(<DropDownFieldCreationForm />);
      },
    },
    {
      name: FieldType.MULTI_SELECT,
      icon: <DoneAllIcon />,
      onClick: () => {
        setCurrentField(FieldType.MULTI_SELECT);
        setSelectedFieldContent(<MultiselectFieldCreationForm />);
      },
    },
    {
      name: FieldType.NUMBER,
      icon: <NumbersIcon />,
      onClick: () => {
        setCurrentField(FieldType.NUMBER);
        setSelectedFieldContent(<NumberFieldCreationForm />);
      },
    },
    {
      name: FieldType.EMAIL,
      icon: <AlternateEmailIcon />,
      onClick: () => {
        setCurrentField(FieldType.EMAIL);
        setSelectedFieldContent(<EmailFieldCreationForm />);
      },
    },
    {
      name: FieldType.PHONE_NUMBER,
      icon: <LocalPhoneIcon />,
    },
    {
      name: FieldType.LINK,
      icon: <LinkIcon />,
    },
    {
      name: FieldType.DATE,
      icon: <CalendarTodayIcon />,
    },
    {
      name: FieldType.TIME,
      icon: <AccessTimeIcon />,
    },
    {
      name: FieldType.FILE_UPLOAD,
      icon: <DriveFolderUploadIcon />,
    },
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
