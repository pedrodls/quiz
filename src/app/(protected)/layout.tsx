import React from "react";
import { ProctedHeader } from "../../components/ProctedHeader";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <ProctedHeader />
      <div className="py-24">{children}</div>
    </div>
  );
}
