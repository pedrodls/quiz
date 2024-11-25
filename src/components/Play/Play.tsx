"use client";

import React, { useCallback, useEffect, useState } from "react";
import { RadioButton } from "@/components/RadioButton";
import { useApi } from "@/hooks/useApi";
import { Button, Skeleton } from "@/components/ui";
import { IAnswer, IQuestion, PlayProps } from "./types";
import {
  correctAnswer,
  errorOnAnswer,
  requiredAnswer,
  wrongAnswer,
} from "./play-alerts";
import { useSession } from "@/hooks/useSession";
import { Loader2 } from "lucide-react";

const strapiUrl = `http://localhost:1337/api/user-answers`;

export function Play({ mode, topic, onClose }: PlayProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<IAnswer | undefined>();

  const session = useSession().session;

  const { data, loading, resolve } = useApi({
    method: "GET",
    url: `play?mode=${mode}&topic=${topic}`,
  });

  const [questions, setQuestions] = useState<IQuestion>();

  const [answers, setAnswers] = useState<Array<IAnswer>>();

  const [index, setIndex] = useState(0);

  const [perc, setPerc] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!selectedAnswer) {
      requiredAnswer();
      return;
    }

    await verifyAnswer();
  };

  const verifyAnswer = async () => {
    {
      try {
        if (questions && index < questions?.data.length) {
          setIsLoading(true);

          
          
          const response = await fetch(strapiUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${session?.jwt}`,
            },
            body: JSON.stringify({
              data: {
                user: session?.user.documentId,
                answer: selectedAnswer?.documentId
              }
            }),
          });

          if (response.ok) {
            const data = await response.json();

            if (selectedAnswer?.isValid) {
              correctAnswer();
            } else {
              wrongAnswer();
            }

            setSelectedAnswer(undefined);

            setIsLoading(false);

            if (questions && index + 1 === questions?.data.length) {
              onClose();
              return;
            }

            setIndex((i) => i + 1);
          } else {
            throw new Error();
          }
        }
      } catch (error) {
        errorOnAnswer();
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    resolve();
  }, []);

  useEffect(() => {
    if (questions) setPerc(((index + 1) * 100) / questions?.data?.length);
  }, [index, answers, questions]);

  useEffect(() => {
    if (data) {
      setQuestions(data); // Define as perguntas
    }
  }, [data]);

  useEffect(() => {
    if (questions) {
      setAnswers(questions?.data[index]?.answers);
    }
  }, [index, questions]);

  return (
    <>
      <div className={`font-[sans-serif]`}>
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

                      <ul
                        className={`w-full flex flex-col gap-2 ${
                          isLoading ? "opacity-50 pointer-events-none" : ""
                        }`}
                      >
                        {answers &&
                          answers?.map((a) => {
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
                        <Button
                          onClick={() => handleSubmit()}
                          disabled={isLoading}
                          type="button"
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="animate-spin" />
                              Please wait
                            </>
                          ) : questions &&
                            index === questions?.data.length - 1 ? (
                            "Finalizar"
                          ) : (
                            "Responder"
                          )}
                        </Button>
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
