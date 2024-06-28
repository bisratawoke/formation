"use client";

import { Drawer, Grid, Stack } from "@mui/material";
import {
  Dispatch,
  SetStateAction,
  ReactNode,
  useState,
  createContext,
  useContext,
} from "react";
import InputBlockList from "@/components/InputBlockList";
import { CreateFormContext, formField } from "./FormInputListContainer";

export type InputBlockType = {
  name: string;
  icon: ReactNode;
  content?: ReactNode;
  onClick?: () => void;
};

export const FormFieldContext = createContext<any>(null);

export default function FormFieldSelectionDrawer({
  openDrawer,
  setOpenDrawer,
}: {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
}) {
  const { formFields, setFormFields } = useContext(CreateFormContext);

  function AddNewFormField(field: formField) {
    setFormFields((state: formField[]) => [...state, { ...field }]);
  }

  const [selectedFieldContent, setSelectedFieldContent] =
    useState<ReactNode | null>(null);
  const [currentField, setCurrentField] = useState<string | null>(null);

  return (
    <Drawer
      PaperProps={{ style: { width: "60vw", overflow: "hidden" } }}
      anchor="right"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      <FormFieldContext.Provider
        value={{
          setSelectedFieldContent,
          AddNewFormField,
          currentField,
          setCurrentField,
        }}
      >
        <Grid container sx={{ height: "100%" }}>
          <Grid
            item
            md={4}
            sx={{
              padding: "8px",
              overflowY: "scroll",
              height: "100%",
            }}
          >
            <Stack spacing={2}>
              <InputBlockList />
            </Stack>
          </Grid>
          <Grid item md={8} sx={{ height: "100%" }}>
            {selectedFieldContent}
          </Grid>
        </Grid>
      </FormFieldContext.Provider>
    </Drawer>
  );
}
