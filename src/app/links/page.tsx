import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Copy, Trash2 } from "lucide-react";
import { CopyButton } from "./_components/copy-button";
import { deleteLink } from "@/server/queries";

const data = [
  {
    url: "https://example.com",
    slug: "hfidow",
  },
  {
    url: "https://example.com",
    slug: "nfosmd",
  },
  {
    url: "https://example.com/aiuewgailwbefaiuwefalwiefuniglbaweif",
    slug: "sodmfj",
  },
];

export default function LinksPage() {
  return (
    <div className="flex h-full w-full justify-center overflow-auto p-20">
      <div className="flex w-full max-w-[600px] flex-col gap-y-4">
        {[...data, ...data, ...data].map((link, index) => (
          <Card key={link.slug + "-" + index}>
            <CardContent className="flex justify-between p-8">
              <div className="font-semibold">{link.slug}</div>
              <div className="w-72 truncate text-right">{link.url}</div>
            </CardContent>
            <CardFooter className="flex justify-end gap-x-2 p-0 px-6 pb-4">
              <CopyButton value={link.url} />
              <form
                action={async () => {
                  "use server";

                  await deleteLink(link.slug);
                }}
              >
                <Button type="submit">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </form>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
