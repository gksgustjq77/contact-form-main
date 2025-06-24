import React from "react";
import type { Field } from "../type/formTypes";

interface Props {
  field: Field;
  value: any;
  onChange: (name: string, value: any) => void;
}

export const TextareaField: React.FC<Props> = ({ field, value, onChange }) => {
  return (
    <div className="w-full px-2 mb-4 text-left font-semibold">
      <label
        htmlFor={field.name}
        className="text-black mb-[7px] inline-flex items-center gap-2 text-sm"
      >
        {field.label}
      </label>
      <textarea
        name={field.name}
        value={value}
        id={field.name}
        rows={(field as any).rows || 4}
        className="bg-white w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[hsl(169,82%,27%)] focus:border-transparent"
        onChange={(e) => onChange(field.name, e.target.value)}
      />
    </div>
  );
};
