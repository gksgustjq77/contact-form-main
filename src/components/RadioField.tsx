import React from "react";
import type { Field } from "../type/formTypes";

interface Props {
  field: Field;
  value: any;
  onChange: (name: string, value: any) => void;
}

export const RadioField: React.FC<Props> = ({ field, value, onChange }) => {
  return (
    <div className="flex w-full px-2 mb-4 flex-col">
      <label className="text-black mb-[7px] inline-flex items-center text-sm font-semibold">
        {field.label}
      </label>
      <div className="flex gap-[20px]">
        {(field as any).options.map((opt: any) => (
          <label
            key={opt.value}
            className={`flex items-center p-4 rounded-md border cursor-pointer transition-colors duration-200 space-x-3 w-full ${
              value === opt.value
                ? "bg-[hsl(61,70%,90%)] border-[hsl(61,70%,52%)]"
                : "bg-white border-[hsl(200,26%,54%)]"
            }`}
          >
            <div className="relative w-5 h-5">
              <input
                type="radio"
                name={field.name}
                value={opt.value}
                checked={value === opt.value}
                onChange={() => onChange(field.name, opt.value)}
                className="peer appearance-none w-5 h-5 border-2 border-[hsl(200,26%,54%)] rounded-full checked:border-[hsl(61,70%,52%)]"
              />
              <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[hsl(61,70%,52%)] rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-0 peer-checked:scale-100" />
            </div>
            <span className="text-[hsl(202,55%,16%)] font-semibold">
              {opt.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
