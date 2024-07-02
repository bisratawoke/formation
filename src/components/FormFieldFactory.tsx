"use client";

import { useEffect } from "react";

export enum FieldType {
  SHORT_ANSWER = "Short answer",
  LONG_ANSWER = "Long answer",
  MULTIPLE_CHOICE = "Multiple choice",
  CHECKBOXES = "Checkboxes",
  DROPDOWN = "Dropdown",
  MULTI_SELECT = "Multi-select",
  NUMBER = "Number",
  EMAIL = "Email",
  PHONE_NUMBER = "Phone number",
  LINK = "Link",
  DATE = "Date",
  TIME = "Time",
  FILE_UPLOAD = "File upload",
}

export default function FormFieldFactory({ fieldType }: any) {
  switch (fieldType) {
    case FieldType.SHORT_ANSWER:
      return <>short answer</>;

    case FieldType.LONG_ANSWER:
      return <>long answer</>;

    case FieldType.MULTIPLE_CHOICE:
      return <>Multiple choice</>;
  }
}
