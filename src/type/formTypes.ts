export type FieldType = "text" | "email" | "textarea" | "radio";

export interface FieldBase {
  name: string;
  label?: string;
  id?: string;
  type: FieldType;
  inline?: number;
}

export interface TextareaField extends FieldBase {
  type: "textarea";
  rows?: number;
}

export interface TextField extends FieldBase {
  type: "text";
  inline?: number; // 몇 개까지 한 줄에 배치할지
  inputs?: { label: string; id: string; value: string; required?: boolean }[];
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
      { label: "First Name", id: "firstName", value: "", required: true },
      { label: "Last Name", id: "lastName", value: "", required: true },
    ],
  },
  {
    name: "email",
    type: "text",
    inputs: [
      { label: "Email Address", id: "email", value: "", required: true },
    ],
  },
  {
    name: "gender",
    label: "Query Type",
    type: "radio",
    options: [
      { label: "General Enquiry", id: "general", value: "male" },
      { label: "Support Request", id: "support", value: "female" },
    ],
    inline: 2,
  },
  { name: "Message", label: "Message", id: "message", type: "textarea" },
];

export type Field = TextField | TextareaField | RadioField;
