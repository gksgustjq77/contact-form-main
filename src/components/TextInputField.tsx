import React from "react";
import type { Field } from "../type/formTypes";

interface Props {
  field: Field;
  value: any;
  onChange: (name: string, value: any) => void;
}

export const TextInputField: React.FC<Props> = ({ field, value, onChange }) => {
  return (
    <div className="flex w-full px-2 mb-4 gap-[20px]">
      {(field as any).inputs.map((opt: any) => (
        <div key={opt.value} className="w-full text-left font-semibold">
          <label className="text-black mb-[7px] inline-flex items-center gap-2 text-sm">
            {opt.label}
          </label>
          <input
            type="text"
            name={field.name}
            value={value}
            id={field.name}
            className="bg-white w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[hsl(169,82%,27%)] focus:border-transparent"
            onChange={() => onChange(opt.name, opt.value)}
          />
        </div>
      ))}
    </div>
  );
};
