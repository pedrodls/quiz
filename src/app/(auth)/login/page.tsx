"use client";

import React from "react";
import { Form } from "./components";
import { ValidatePublicAuth } from "@/components/ValidatePublicAuth";

export default function Page() {
  return (
    <>
      <ValidatePublicAuth>
        <Form />
      </ValidatePublicAuth>
    </>
  );
}
