import React from "react";
import { Container } from "./Container";
import Link from "next/link";

export function HeroSection() {
  return (
    <>
      <div className="relative" id="home">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        <Container>
          <div className="relative pt-36 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
                Bem vindo ao QUIZ{" "}
                <span className="text-primary dark:text-white">AnsAsk.</span>
              </h1>
              <p className="mt-8 text-gray-700 dark:text-gray-300">
                O QUIZ AnsAsk é uma plataforma interativa de perguntas e
                respostas. Com um formato dinâmico e divertido, o quiz oferece perguntas variadas, desde
                conhecimentos gerais até tópicos mais específicos. Prepare-se
                para aprender, se divertir e, quem sabe, se surpreender com o
                quanto você sabe!
              </p>
              <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                <Link
                  href="/login"
                  className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-white">
                    Get started
                  </span>
                </Link>
                <a
                  href="#features"
                  className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:border before:border-transparent before:bg-primary/10 before:bg-gradient-to-b before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 dark:before:border-gray-700 dark:before:bg-gray-800 sm:w-max"
                >
                  <span className="relative text-base font-semibold text-primary dark:text-white">
                    Saiba mais
                  </span>
                </a>
              </div>
              <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    Grátis
                  </h6>
                  <p className="mt-2 text-gray-500">100% Gratuito</p>
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    Simples
                  </h6>
                  <p className="mt-2 text-gray-500">Simples e Intuitivo</p>
                </div>
                <div className="text-left">
                  <h6 className="text-lg font-semibold text-gray-700 dark:text-white">
                    Inovador
                  </h6>
                  <p className="mt-2 text-gray-500">Inovador e Interativo</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
