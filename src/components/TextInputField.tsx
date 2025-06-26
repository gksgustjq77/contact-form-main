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
      {(field as any).inputs.map((opt: any, index: number) => (
        <div key={index} className="w-full text-left font-semibold">
          <label className="text-black mb-[7px] inline-flex items-center gap-2 text-sm">
            {opt.label}{" "}
            <span className="text-[hsl(169,82%,27%)]">
              {opt.required && "*"}
            </span>
          </label>
          <input
            type="text"
            name={field.name}
            value={value[field.name]}
            id={field.name}
            className="bg-white text-black w-full px-3 py-2 border rounded-md cursor-pointer transition-colors duration-200 
              focus:outline-none focus:ring-1 focus:ring-[hsl(169,82%,27%)] focus:border-transparent
              hover:border-[hsl(169,82%,27%)]"
            onChange={(e) => onChange(opt.id, e.target.value)}
          />
          <div className="mt-[7px] text-sm text-[hsl(0,66%,54%)] font-light">
            {value[opt.id] === "" ? opt.errorMsg : ""}
          </div>
        </div>
      ))}
    </div>
  );
};
