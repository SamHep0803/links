"use client";
import { Button } from "@/components/ui/button";
import { Loader2, Plus } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="gap-x-1 self-end" type="submit" disabled={pending}>
      {pending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <>
          <Plus className="h-4 w-4" />
          Create
        </>
      )}
    </Button>
  );
}
