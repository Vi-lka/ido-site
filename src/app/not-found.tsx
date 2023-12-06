import NotFound from "@/components/errors/NotFound";
import React from "react";

export default function NotFoundPage() {

  return (
    <div className="md:mt-20">
      <NotFound goBack />
    </div>
  );
}
