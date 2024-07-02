"use client";

import { useField } from "formik";
import { Box } from "@mui/material";
import React from "react";

export default function TextInputContainer({
  label,
  name,
  children,
  ...props
}: any) {
  const [field, meta] = useField(name);

  const InputField = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        ...field,
        ...props,
        helperText: meta.touched && meta.error ? meta.error : "",
        error: meta.touched && Boolean(meta.error),
        label: label,
      });
    }
    return child;
  });

  return (
    <Box>
      <label htmlFor={name}></label>
      {InputField}
    </Box>
  );
}
