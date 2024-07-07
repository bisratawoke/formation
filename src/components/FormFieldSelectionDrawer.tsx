"use client";

import { Drawer, Grid, Stack } from "@mui/material";
import {
  Dispatch,
  SetStateAction,
  ReactNode,
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";
import InputBlockList from "@/components/InputBlockList";
import { CreateFormContext, formField } from "./FormInputListContainer";
import FormInputSelectionDrawerDefaultContent from "./FormInputSelectionDrawerDefaultContent";
import { FieldType } from "./FormFieldFactory";

export type InputBlockType = {
  name: FieldType | string;
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

  useEffect(() => {
    setSelectedFieldContent(<FormInputSelectionDrawerDefaultContent />);
  }, []);
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
          setOpenDrawer,
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
          <Grid item md={8} sx={{ height: "100%" }} minHeight={"100vh"}>
            {selectedFieldContent}
          </Grid>
        </Grid>
      </FormFieldContext.Provider>
    </Drawer>
  );
}
