"use client";

import { IAnswer } from "@/app/(protected)/menu/components/DialogPlay/components";
import { Circle } from "lucide-react";
import React, { useState } from "react";

const success = `inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-green-500 peer-checked:border-green-600 peer-checked:bg-green-50 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700`;

const error =
  "inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-red-500 peer-checked:border-red-600 peer-checked:bg-red-50 peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700";

export function RadioButton({
  answer,
  name,
  value,
  setSelectedAnswer,
  disabled = false
}: {
  answer: IAnswer;
  name: string;
  value: string;
  disabled?: boolean
  setSelectedAnswer: React.Dispatch<React.SetStateAction<IAnswer | undefined>>;
}) {
  return (
    <>
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        onChange={() => setSelectedAnswer(answer)}
        className="hidden peer"
        disabled={disabled}
      />
      <label
        htmlFor={value}
        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-red-500 peer-checked:border-red-600 peer-checked:bg-red-50 peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="block">
          <div className="w-full">{value}</div>
        </div>
        <div className="w-5 h-5 ms-3 rtl:rotate-180">
          <Circle
            className={
              answer.isValidated && answer.isValid
                ? "bg-green-200 rounded-full"
                : answer.isValidated && !answer.isValid
                ? "bg-red-500 rounded-full"
                : ""
            }
          />
        </div>
      </label>
    </>
  );
}
