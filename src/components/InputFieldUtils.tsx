"use client";

import { Stack } from "@mui/material";
import AddInputFieldButton from "./AddInputFieldButton";
import { Delete } from "@mui/icons-material";
import { StyledIcon } from "./StyledIcon";
import { CreateFormContext, formField } from "./FormInputListContainer";
import { ReactNode, useContext } from "react";
import TextInputContainer from "./TextInputContainer";
import { LargeTextInput } from "./LargeTextInput";

export default function InputFieldUtils() {
  const { formFields, setFormFields } = useContext(CreateFormContext);

  function AddNewFormField(field: formField) {
    setFormFields((state: formField[]) => [...state, { ...field }]);
  }
  return (
    <Stack direction={"row"} sx={{ position: "relative", right: 25 }}>
      <StyledIcon>
        <Delete />
      </StyledIcon>

      <StyledIcon
        onClick={() => {
          AddNewFormField({
            id: formFields.length + 1,
            name: "age",
            label: "Age",
            hasUtils: true,
            field: function ({
              name,
              label,
            }: {
              name: string;
              label: string;
            }): ReactNode {
              return (
                <TextInputContainer name={"age"} label={"Age"}>
                  <LargeTextInput
                    placeholder="Form Title"
                    variant="outlined"
                  ></LargeTextInput>
                </TextInputContainer>
              );
            },
          });
        }}
      >
        <AddInputFieldButton />
      </StyledIcon>
    </Stack>
  );
}
