"use client";

import { Accordion, AccordionSummary, Stack, Typography } from "@mui/material";
import FieldCreationFormContainer from "./FieldCreationFormContainer";
import { BodyText } from "./FormInputSelectionDrawerDefaultContent";
import { ExpandMore } from "@mui/icons-material";
export default function DropDownFieldCreationForm() {
  return (
    <FieldCreationFormContainer
      title={"Long answer"}
      helperTextContainer={
        <Stack>
          <BodyText>Use this for a long list of answer options, like</BodyText>
          <BodyText>selecting your nationality.</BodyText>
        </Stack>
      }
      exampleContainer={
        <Stack spacing={1}>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              color: "rgb(55,53,47)",
              lineHeight: "18px",
            }}
          >
            Country of birth
          </Typography>
          <Accordion
            disabled
            sx={{
              backgroundColor: "white",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{
                backgroundColor: "white",
              }}
            >
              {/* Accordion 1 */}
            </AccordionSummary>
          </Accordion>
        </Stack>
      }
    />
  );
}
