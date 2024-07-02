"use client";

import { Box, Drawer, Stack } from "@mui/material";
import AddInputFieldButton from "./AddInputFieldButton";
import { Delete } from "@mui/icons-material";
import { StyledIcon } from "./StyledIcon";
import { CreateFormContext, formField } from "./FormInputListContainer";
import { ReactNode, useContext, useState } from "react";
import TextInputContainer from "./TextInputContainer";
import { LargeTextInput } from "./LargeTextInput";
import { StyledDrawer } from "./StyledDrawer";
import FormFieldSelectionDrawer from "./FormFieldSelectionDrawer";
import InputFieldUtilsMenu from "./InputFieldUtilsMenu";

export default function InputFieldUtils() {
  const { formFields, setFormFields } = useContext(CreateFormContext);
  const [openDrawer, setOpenDrawer] = useState<Boolean | any>(false);

  return (
    <Box>
      <InputFieldUtilsMenu setOpenDrawer={setOpenDrawer} />
      <FormFieldSelectionDrawer
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
      />
    </Box>
  );
  // return (
  //   <Stack direction={"row"} sx={{ position: "relative", right: 25 }}>
  //     <StyledIcon>
  //       <Delete />
  //     </StyledIcon>ss
  //     <FormFieldSelectionDrawer
  //       openDrawer={openDrawer}
  //       setOpenDrawer={setOpenDrawer}
  //     />
  //     <StyledIcon
  //       onClick={() => {
  //         setOpenDrawer(true);
  //       }}
  //     >
  //       <AddInputFieldButton />
  //     </StyledIcon>
  //   </Stack>
  // );
}
