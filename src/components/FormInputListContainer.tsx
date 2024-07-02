"use client";

import { Formik } from "formik";
import * as yup from "yup";
import { LargeTextInput } from "./LargeTextInput";
import TextInputContainer from "./TextInputContainer";
import { RightIconButton } from "./RightIconButton";
import { Box, Stack } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import InputField from "./InputField";
import { createContext, useState } from "react";
import { pink } from "@mui/material/colors";

export type formField = {
  id: number;
  name: string;
  label: string;
  hasUtils: boolean;
  props?: Record<string, any>;
  field: ({ name, label }: { name: string; label: string }) => React.ReactNode;
};

export const CreateFormContext = createContext<any>(null);
export default function FormInputListContainer() {
  const [formFields, setFormFields] = useState<formField[]>([
    {
      id: 1,
      name: "title",
      label: "Title",
      hasUtils: false,
      field: ({ name, title }: any) => (
        <TextInputContainer name={name} label={title}>
          <LargeTextInput
            placeholder="Form Title"
            variant="outlined"
          ></LargeTextInput>
        </TextInputContainer>
      ),
    },
  ]);

  return (
    <CreateFormContext.Provider value={{ formFields, setFormFields }}>
      <Formik
        initialValues={{}}
        validationSchema={yup.object({
          title: yup.string().required(),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <Stack component="form" onSubmit={handleSubmit} spacing="124px">
            <Stack spacing={5}>
              {formFields.map((field) => (
                <InputField
                  key={field.id}
                  hasUtils={field.hasUtils}
                  Field={field.field({ name: field.name, label: field.label })}
                />
              ))}
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
    </CreateFormContext.Provider>
  );
}
