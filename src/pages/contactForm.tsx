// ContactForm.tsx
import React, { useState } from "react";
import { FormField } from "../components/FormField";
import { fields } from "../type/formTypes";

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState<Record<string, any>>(
    Object.fromEntries(fields.map((f) => [f.name, ""]))
  );

  const handleChange = (name: string, value: any) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", form);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="gap-[15px] flex flex-col">
        <h1 className="text-black text-left font-bold text-lg px-2 mb-3">
          Contact Us
        </h1>
        {fields.map((field) => (
          <FormField
            key={field.name}
            field={field}
            value={form[field.name]}
            onChange={handleChange}
          />
        ))}

        <div className="px-2 mb-4 flex ">
          <label className="inline-flex items-center cursor-pointer gap-[20px]">
            <input
              type="checkbox"
              className="appearance-none w-4 h-4 border-gray-400 border-2 bg-center checked:bg-[url('/images/icon-checkbox-check.svg')]"
            />
            <span className="text-black">
              I consent to being contacted by the team
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="bg-[hsl(169,82%,27%)] w-full p-[10px] text-white"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
