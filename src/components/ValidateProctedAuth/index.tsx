"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Loading } from "../Loading";
import { useSession } from "@/hooks/useSession";

export function ValidateProctedAuth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    const token = useSession.getState().session?.jwt;

    if (!token) {
      // Redireciona para a página de login se o token não for encontrado
      router.push("/login");

    } else {
      setIsAuthenticated(true);
    }
    setIsLoaded(true);
  }, [router]);

  if (!isLoaded) {
    // Enquanto o estado está sendo carregado, pode-se retornar null ou um loader
    return <Loading />;
  }

  return <>{isAuthenticated ? <>{children}</> : null}</>;
}
