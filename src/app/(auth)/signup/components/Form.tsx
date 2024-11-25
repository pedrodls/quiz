"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, MoveLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import { SignupDataType, signupSchema } from "../schema";
import { useAuth } from "@/hooks/useAuth";
import { PasswordInput } from "@/components/PasswordButton";
import { useRouter } from "next/navigation";

export function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupDataType>({
    resolver: zodResolver(signupSchema),
  });

  const { signup, loading, error, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/menu");
  }, [user, router]);

  const onSubmit = async (data: SignupDataType) => {
    await signup(data);
  };

  return (
    <>
      <div className="font-[sans-serif] ">
        <div className="min-h-screen flex  flex-col items-center justify-center">
          <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0px_0px_8px_rgba(0,0,0,0.3)] rounded-md bg-white">
            <div className="md:max-w-md w-full px-4 py-4 ">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-12">
                  <h3 className="text-gray-800 text-3xl font-extrabold flex items-center gap-3">
                    <Link href={"/"}>
                      <MoveLeft />
                    </Link>{" "}
                    <span>AnsAsk</span>
                  </h3>
                  <p className="text-sm mt-4 text-gray-800">
                    Já tem conta?{" "}
                    <a
                      href="/login"
                      className="text-gray-900 font-semibold hover:underline ml-1 whitespace-nowrap"
                    >
                      Entre aqui
                    </a>
                  </p>
                </div>

                <div>
                  <label className="text-gray-800 text-xs block mb-2">
                    Email
                  </label>
                  <div className="relative flex items-center">
                    <input
                      {...register("email")}
                      name="email"
                      type="text"
                      required
                      className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-gray-600 px-2 py-3 outline-none"
                      placeholder="Enter email"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-2"
                      viewBox="0 0 682.667 682.667"
                    >
                      <defs>
                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                          <path
                            d="M0 512h512V0H0Z"
                            data-original="#000000"
                          ></path>
                        </clipPath>
                      </defs>
                      <g
                        clipPath="url(#a)"
                        transform="matrix(1.33 0 0 -1.33 0 682.667)"
                      >
                        <path
                          fill="none"
                          strokeMiterlimit="10"
                          strokeWidth="40"
                          d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                          data-original="#000000"
                        ></path>
                        <path
                          d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                          data-original="#000000"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  {errors.email && (
                    <small className="text-red-500">
                      {errors.email.message}
                    </small>
                  )}
                </div>

                <PasswordInput
                  description="Password"
                  name="password"
                  register={register}
                  errors={errors}
                />

                <PasswordInput
                  description="Confirme Password"
                  name="confirmPassword"
                  register={register}
                  errors={errors}
                />

                <div className="text-center w-full mt-6">
                  {error && (
                    <span className="block text-red-400 my-4">
                      {error}
                      <br />
                    </span>
                  )}
                </div>

                <div className="mt-12">
                  <button
                    type="submit"
                    className={`w-full justify-center flex shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-gray-600 ${
                      !loading ? "hover:bg-gray-900" : ""
                    } focus:outline-none`}
                    disabled={loading}
                  >
                    Criar conta{" "}
                    {loading && <Loader2 className="animate-spin" />}
                  </button>
                </div>
              </form>
            </div>

            <div className="relative md:h-full  rounded-xl lg:p-12 p-8">
              <ImageWithSkeleton src="/signup.png" alt="login-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
