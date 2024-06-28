"use client";

import {
  Drawer,
  Grid,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import {
  Dispatch,
  SetStateAction,
  ReactNode,
  useState,
  createContext,
} from "react";
import InputBlockList from "@/components/InputBlockList";

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
  const [selectedFieldContent, setSelectedFieldContent] =
    useState<ReactNode | null>(null);
  return (
    <Drawer
      PaperProps={{ style: { width: "60vw", overflow: "hidden" } }}
      anchor="right"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      <FormFieldContext.Provider value={{ setSelectedFieldContent }}>
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
