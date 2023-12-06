import React from "react";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="mx-auto w-[85%] max-w-[1600px] pt-20">
      <Loader2 className="mx-auto h-12 w-12 animate-spin" />
    </div>
  );
}
