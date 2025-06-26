export type FieldType = "text" | "email" | "textarea" | "radio";

export interface FieldBase {
  name: string;
  label?: string;
  id?: string;
  type: FieldType;
  required?: boolean;
  inline?: number;
  errorMsg?: string;
}

export interface TextareaField extends FieldBase {
  type: "textarea";
  rows?: number;
  required?: boolean;
  inputs?: [{}];
}

export interface TextField extends FieldBase {
  type: "text";
  inline?: number; // 몇 개까지 한 줄에 배치할지
  inputs?: {
    label: string;
    id: string;
    value: string;
    required?: boolean;
    errorMsg?: string;
  }[];
}

export interface RadioField extends FieldBase {
  type: "radio";
  options: { label: string; id: string; value: string }[];
  inline?: number;
}

export const fields: Field[] = [
  {
    name: "name",
    type: "text",
    inputs: [
      {
        label: "First Name",
        id: "firstName",
        value: "",
        required: true,
        errorMsg: "This filed is required",
      },
      {
        label: "Last Name",
        id: "lastName",
        value: "",
        required: true,
        errorMsg: "This filed is required",
      },
    ],
  },
  {
    name: "email",
    type: "text",
    inputs: [
      {
        label: "Email Address",
        id: "email",
        value: "",
        required: true,
        errorMsg: "Please enter a valid email address",
      },
    ],
  },
  {
    name: "query",
    label: "Query Type",
    type: "radio",
    required: true,
    errorMsg: "Please select a query type",
    options: [
      {
        label: "General Enquiry",
        id: "general",
        value: "general",
      },
      {
        label: "Support Request",
        id: "support",
        value: "support",
      },
    ],
    inline: 2,
  },
  {
    name: "Message",
    label: "Message",
    id: "message",
    type: "textarea",
    required: true,
    errorMsg: "This filed is required",
  },
];

export type Field = TextField | TextareaField | RadioField;
