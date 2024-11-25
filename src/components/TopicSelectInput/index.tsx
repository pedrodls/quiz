/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { SelectInputProps } from "@/components/SelectInput";
import { Skeleton } from "@/components/ui";
import { useApi } from "@/hooks/useApi";
import React, { useEffect } from "react";
import { Controller } from "react-hook-form";

export const TopicSelectInput = ({
  name,
  control,
  error,
}: SelectInputProps) => {
  const { data, resolve, loading } = useApi({
    method: "GET",
    url: "topics",
  });

  useEffect(() => {
    resolve();
  }, []);

  if (loading) return <Skeleton className="w-full py-2.5 bg-slate-200" />
;

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
            <option>...</option>
            {data?.data?.map((option: any) => (
              <option
                key={option.id + option.description}
                value={option.description}
              >
                {option.description}
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
