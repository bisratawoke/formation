"use client";

import { Formik } from "formik";
import * as yup from "yup";
import { LargeTextInput } from "./LargeTextInput";
import TextInputContainer from "./TextInputContainer";
import AddInputFieldButton from "./AddInputFieldButton";
import { RightIconButton } from "./RightIconButton";
import { Box, Stack } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import InputField from "./InputField";
export default function FormInputListContainer() {
  return (
    <Formik
      initialValues={{
        title: "",
      }}
      validationSchema={yup.object({
        title: yup.string().required(),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit }) => (
        <Stack component="form" onSubmit={handleSubmit} spacing="124px">
          <Stack spacing={2}>
            <InputField
              Field={
                <TextInputContainer name="title" label="Title">
                  <LargeTextInput
                    placeholder="Form Title"
                    variant="outlined"
                  ></LargeTextInput>
                </TextInputContainer>
              }
              hasUtils={false}
            />

            <InputField hasUtils={true} />
          </Stack>
          <Box>
            <InputField
              hasUtils={false}
              Field={
                <RightIconButton
                  type="submit"
                  variant="contained"
                  endIcon={<ArrowForward />}
                  sx={{
                    backgroundColor: "#000000",
                    fontSize: "16px",
                    color: "white",
                    fontWeight: 600,
                    lineHeight: "18px",
                    "&:hover": {
                      backgroundColor: "",
                    },
                  }}
                >
                  Submit
                </RightIconButton>
              }
            />
          </Box>
        </Stack>
      )}
    </Formik>
  );
}
