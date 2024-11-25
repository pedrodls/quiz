import React, { useState } from "react";
import { FieldValues, UseFormRegister, FieldErrors } from "react-hook-form";

interface PasswordProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>; // Função de registro do React Hook Form
  errors: FieldErrors<FieldValues>; // Erros do formulário
  name: string;
  description: string;
}

export const PasswordInput = ({
  register,
  errors,
  name,
  description,
}: PasswordProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="mt-8">
        <label className="text-gray-800 text-xs block mb-2">
          {description}
        </label>
        <div className="relative flex items-center">
          <input
            {...register(name)}
            name={name}
            type={!visible ? "password" : "text"}
            required
            className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-gray-600 px-2 py-3 outline-none"
            placeholder="Confirme sua senha"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#bbb"
            stroke="#bbb"
            className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
            viewBox="0 0 128 128"
            onClick={() => setVisible(!visible)}
          >
            <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"></path>
          </svg>
        </div>

        {errors[name] && (
          <small className="text-red-500">
            {errors?.[name]?.message?.toString()}
          </small>
        )}
      </div>
    </>
  );
};
