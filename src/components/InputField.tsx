"use client";

import { Grid, Stack } from "@mui/material";
import InputFieldUtils from "./InputFieldUtils";
import { createContext, useEffect } from "react";

export const InputFieldContext = createContext<any>(null);
export default function InputField({
  Field,
  hasUtils,
  key,
  attribute,
}: {
  Field?: any;
  hasUtils: boolean;
  key?: number;
  attribute?: any;
}) {
  return (
    <InputFieldContext.Provider value={{ attribute: attribute }}>
      <Grid container>
        <Grid item md={1}>
          {hasUtils ? <InputFieldUtils /> : <></>}
        </Grid>
        <Grid item md={11}>
          {Field}
        </Grid>
      </Grid>
    </InputFieldContext.Provider>
  );
}
