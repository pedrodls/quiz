"use client";

import React from "react";
import { Controller, Control, FieldErrors } from "react-hook-form";

export type SelectOptionType = {
  value: string;
  label: string;
};

export interface SelectInputProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  options?: SelectOptionType[];
  defaultValue?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: FieldErrors<any>;
}

export const SelectInput = ({
  name,
  control,
  options,
  error,
}: SelectInputProps) => {
  return (
    <div className="relative w-full">
      <label htmlFor={name} className="sr-only">
        {name}
      </label>

      <Controller
      
        name={name}
        control={control}
        defaultValue={""}
        render={({ field }) => (
          <select
            id="underline_select"
            className="block py-2.5 px-2 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            {...field}
          >
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
      {error && (
        <small className="block text-red-500">
          {error[name]?.message?.toString()}
        </small>
      )}
    </div>
  );
};
