"use client";

import React, { useEffect, useState } from "react";
import { RadioButton } from "@/components/RadioButton";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useApi } from "@/hooks/useApi";
import { Skeleton } from "@/components/ui";
import { IAnswer, IQuestion, PlayProps } from "./types";

export function Play({ mode, topic }: PlayProps) {
  const { data, loading, resolve } = useApi({
    method: "GET",
    url: `play?mode=${mode}&topic=${topic}`,
  });

  const [questions, setQuestions] = useState<IQuestion>();

  const [answers, setAnswers] = useState<Array<IAnswer>>();

  const [index, setIndex] = useState(0);

  const [perc, setPerc] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const [isValidated, setIsValidated] = useState(false);

  const [selectedAnswer, setSelectedAnswer] = useState<IAnswer | undefined>();

  const handleSubmit = async () => {
    if (!selectedAnswer) return;

    setIsLoading(true);

    if (selectedAnswer.isValid) {
      setIsValidated(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    resolve();
  }, []);

  useEffect(() => {
    setPerc(((index + 1) * 100) / questions?.data?.length!);
  }, [index, answers]);

  useEffect(() => {
    if (data) {
      setQuestions(data); // Define as perguntas
    }
  }, [data]);

  useEffect(() => {
    if (questions) {
      const newQuetionData = questions.data[index];

      const currentAnswers = questions?.data[index]?.answers.map((a) => ({
        ...a,
        isValidated: false, // Adiciona propriedade inicial
      }));

      setAnswers(currentAnswers);
    }
  }, [index, questions]);

  return (
    <>
      <div className="font-[sans-serif] ">
        <div className=" flex  flex-col items-center justify-center">
          <div className="w-full p-4 m-4   bg-white flex items-center">
            {loading ? (
              <Skeleton className="w-full h-[80vh]" />
            ) : (
              data && (
                <>
                  <form action="" className="w-full">
                    <div className="mb-12 ">
                      <h3 className="text-gray-800 text-3xl font-extrabold text-center">
                        {topic} QUIZ
                      </h3>
                    </div>

                    <div>
                      <label className="text-gray-800 font-bold block mb-8">
                        {`${index + 1}. ${
                          questions?.data[index]?.description
                        }?`}
                      </label>

                      <ul className="w-full flex flex-col gap-2">
                        {answers &&
                          answers?.map((a, key) => {
                            return (
                              <li key={`question-${a.description}`}>
                                <RadioButton
                                  answer={a}
                                  name={"question-" + index}
                                  value={a.description}
                                  setSelectedAnswer={setSelectedAnswer}
                                />
                              </li>
                            );
                          })}
                      </ul>
                    </div>

                    <div className="mt-12 text-center flex w-full gap-4 items-center">
                      <div className="w-full">
                        <div className="text-sm flex justify-between">
                          <span className="block">
                            {index + 1} of {questions?.data.length}
                          </span>
                          <span className="block">{perc}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                          <div
                            className="bg-black h-1.5 rounded-full"
                            style={{ width: `${perc}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex">
                        <button
                          onClick={() => handleSubmit()}
                          type="button"
                          className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                          disabled={isLoading}
                        >
                          <span className="relative text-sm font-semibold text-white">
                            {index + 1 === questions?.data.length
                              ? "Finalizar"
                              : "Responder"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </>
              )
            )}

            {/*  <div className="relative md:h-full  rounded-xl lg:p-12 p-8">
              <ImageWithSkeleton src="/quiz.png" alt="login-image" />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
