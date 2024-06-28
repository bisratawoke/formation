"use client";

import { Grid, Stack } from "@mui/material";
import InputFieldUtils from "./InputFieldUtils";
import TextInputContainer from "./TextInputContainer";
export default function InputField({
  Field,
  hasUtils,
}: {
  Field?: any;
  hasUtils: boolean;
}) {
  return (
    <Grid container>
      <Grid item md={1}>
        {hasUtils ? <InputFieldUtils /> : <></>}
      </Grid>
      <Grid item md={11}>
        {Field}
      </Grid>
    </Grid>
  );
}
