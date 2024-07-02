"use client";

import FieldCreationFormContainer from "@/components/FieldCreationFormContainer";
import { Autocomplete, Stack, TextField } from "@mui/material";
import { BodyText } from "./FormInputSelectionDrawerDefaultContent";

export default function MultiselectFieldCreationForm() {
  return (
    <FieldCreationFormContainer
      title={"Multi-select"}
      helperTextContainer={
        <Stack spacing={1}>
          <BodyText>Use this to allow users to select multiple</BodyText>
          <BodyText>answers from a list of choices.</BodyText>
        </Stack>
      }
      exampleContainer={
        <Autocomplete
          disabled
          open={true}
          value={[{ label: "Fantasy" }, { label: "Action" }]}
          multiple={true}
          options={[
            { label: "Fantasy" },
            { label: "Action" },
            { label: "Horror" },
            { label: "Comedy" },
          ]}
          renderInput={(params) => <TextField {...params} disabled />}
        ></Autocomplete>
      }
    />
  );
}
