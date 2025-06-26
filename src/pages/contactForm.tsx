// ContactForm.tsx
import React, { useState } from "react";
import { FormField } from "../components/FormField";
import { fields } from "../type/formTypes";

const submitValues = {
  firstName: "",
  lastName: "",
  email: "",
  query: "",
  message: "",
};
type SubmitValues = typeof submitValues;

export const ContactForm: React.FC = () => {
  const [submitValue, setSubmitValue] = useState<SubmitValues>(submitValues);
  const [consent, setConsent] = useState<boolean>(false);

  const handleChange = (name: string, value: any) => {
    setSubmitValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log("submitValue ", submitValue);
    e.preventDefault();
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
            value={submitValue}
            onChange={handleChange}
          />
        ))}

        <div className="px-2 mb-4 flex flex-col  ">
          <label className="inline-flex items-center cursor-pointer gap-[20px]">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="appearance-none w-4 h-4 border-gray-400 border-2 bg-center checked:bg-[url('/images/icon-checkbox-check.svg')]"
            />
            <span className="text-black text-left">
              I consent to being contacted by the team
            </span>
          </label>

          {!consent && (
            <div className="text-black flex mt-[7px] text-sm text-[hsl(0,66%,54%)] font-light text-left">
              To submit this form, please consent to being contacted
            </div>
          )}
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
