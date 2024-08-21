"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function ButtonBack() {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()}>
      <ChevronLeft className="mr-1 size-3" />
      Back
    </Button>
  );
}
