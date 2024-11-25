import React from "react";
import { SignupForm } from "./components";
import { ValidatePublicAuth } from "@/components/ValidatePublicAuth";

export default function Page() {
  return (
    <ValidatePublicAuth>
      <SignupForm />
    </ValidatePublicAuth>
  );
}
