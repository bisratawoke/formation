"use client";

import { Drawer, Stack } from "@mui/material";
import AddInputFieldButton from "./AddInputFieldButton";
import { Delete } from "@mui/icons-material";
import { StyledIcon } from "./StyledIcon";
import { CreateFormContext, formField } from "./FormInputListContainer";
import { ReactNode, useContext, useState } from "react";
import TextInputContainer from "./TextInputContainer";
import { LargeTextInput } from "./LargeTextInput";
import { StyledDrawer } from "./StyledDrawer";
import FormFieldSelectionDrawer from "./FormFieldSelectionDrawer";
export default function InputFieldUtils() {
  const { formFields, setFormFields } = useContext(CreateFormContext);
  const [openDrawer, setOpenDrawer] = useState(false);
  function AddNewFormField(field: formField) {
    setFormFields((state: formField[]) => [...state, { ...field }]);
  }
  return (
    <Stack direction={"row"} sx={{ position: "relative", right: 25 }}>
      <StyledIcon>
        <Delete />
      </StyledIcon>
      <FormFieldSelectionDrawer
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
      <StyledIcon
        onClick={() => {
          setOpenDrawer(true);
        }}
      >
        <AddInputFieldButton />
      </StyledIcon>
    </Stack>
  );
}
