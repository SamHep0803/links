"use client";
import { Button } from "@/components/ui/button";
import { Loader2, Trash2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <>
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </>
      )}
    </Button>
  );
}
