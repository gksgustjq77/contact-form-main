import React from "react";
import type { Field } from "../type/formTypes";

interface Props {
  field: Field;
  value: any;
  onChange: (name: string, value: any) => void;
}

export const TextareaField: React.FC<Props> = ({ field, value, onChange }) => {
  console.log("asd ", value);
  return (
    <div className="w-full px-2 mb-4 text-left font-semibold">
      <label
        htmlFor={field.name}
        className="text-black mb-[7px] inline-flex items-center gap-2 text-sm"
      >
        {field.label}
        <span className="text-[hsl(169,82%,27%)]">{field.required && "*"}</span>
      </label>
      <textarea
        name={field.name}
        value={value[field.name]}
        id={field.name}
        rows={(field as any).rows || 4}
        className="bg-white text-black w-full px-3 py-2 border rounded-md cursor-pointer transition-colors duration-200 
        focus:outline-none focus:ring-1 focus:ring-[hsl(169,82%,27%)] focus:border-transparent
        hover:border-[hsl(169,82%,27%)]"
        onChange={(e) => onChange(field.id as string, e.target.value)}
      />
      <div className="mt-[7px] text-sm text-[hsl(0,66%,54%)] font-light text-left">
        {value[field.id as string] === "" ? field.errorMsg : ""}
      </div>
    </div>
  );
};
