"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import { useAuth } from "@/hooks/useAuth";

import Link from "next/link";
import { MenuDataType, menuSchema } from "../../app/(protected)/menu/schema";
import { TopicSelectInput } from "../TopicSelectInput";
import { ModeSelectInput } from "../ModeSelectInput";
import { PlayDialog } from "../Play/PlayDialog";

export function MenuForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<MenuDataType>({
    resolver: zodResolver(menuSchema),
  });

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [data, setData] = useState<MenuDataType>();

  const { logout, loading } = useAuth();

  const onSubmit = async (data: MenuDataType) => {
    setData(data);
    setIsOpen(true);
  };

  return (
    <>
      <div className="font-[sans-serif] ">
        <div className="min-h-screen flex  flex-col items-center justify-center">
          <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0px_0px_8px_rgba(0,0,0,0.3)] rounded-md bg-white ">
            <div className="md:max-w-md w-full px-4 py-4 ">
              <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-12 ">
                  <h3 className="text-gray-800 text-3xl font-extrabold text-center">
                    AnsAsk QUIZ Menu
                  </h3>
                </div>

                <div>
                  <label className="text-gray-800 text-xs block mb-2">
                    Topic
                  </label>
                  <div className="relative flex items-center">
                    <TopicSelectInput
                      name="topic"
                      control={control}
                      error={errors}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="text-gray-800 text-xs block mb-2">
                    Mode
                  </label>
                  <div className="relative flex items-center">
                    <ModeSelectInput
                      name="mode"
                      control={control}
                      error={errors}
                    />
                  </div>
                </div>

                <div className="text-center w-full mt-6">
                  <Link
                    href="#"
                    className="block text-gray-900 uppercase font-semibold text-sm hover:underline"
                  >
                    scores
                  </Link>
                  <a
                    href="#"
                    target="_blank"
                    className="block text-red-500 uppercase font-semibold text-sm hover:underline"
                    onClick={() => logout()}
                  >
                    Logout
                  </a>
                </div>
                <div className="mt-12 text-center">
                  <button
                    type="submit"
                    className={`w-full justify-center flex shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-gray-600 ${
                      !loading ? "hover:bg-gray-900" : ""
                    } focus:outline-none`}
                    disabled={loading}
                  >
                    Play {loading && <Loader2 className="animate-spin" />}
                  </button>
                </div>
              </form>
            </div>

            <div className="relative md:h-full  rounded-xl lg:p-12 p-8">
              <ImageWithSkeleton src="/quiz.png" alt="login-image" />
            </div>

            {data && (
              <PlayDialog
                isOpen={isOpen}
                topic={data?.topic}
                onClose={() => setIsOpen((isOpen) => !isOpen)}
                mode={data?.mode}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
