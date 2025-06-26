import React, { useState } from "react";
import { type Field } from "../type/formTypes";
import { TextInputField } from "./TextInputField";
import { TextareaField } from "./TextareaField";
import { RadioField } from "./RadioField";

interface Props {
  field: Field;
  value: any;
  onChange: (name: string, value: any) => void;
}

export const FormField: React.FC<Props> = ({ field, value, onChange }) => {
  switch (field.type) {
    case "text":
      return <TextInputField field={field} value={value} onChange={onChange} />;
    case "textarea":
      return <TextareaField field={field} value={value} onChange={onChange} />;
    case "radio":
      return <RadioField field={field} value={value} onChange={onChange} />;
    default:
      return null;
  }
};
