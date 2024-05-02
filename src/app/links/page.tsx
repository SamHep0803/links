import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { CopyButton } from "./_components/copy-button";
import { deleteLink, getLinks } from "@/server/queries";
import { DeleteButton } from "./_components/delete-button";
import { headers } from "next/headers";

export default async function LinksPage() {
  const hostname = headers().get("x-forwarded-host")!;
  const links = await getLinks();

  if (links.length === 0) {
    return <div className="text-6xl font-bold">No links.</div>;
  }

  return (
    <div className="flex h-full w-full justify-center overflow-auto p-20">
      <div className="flex w-full max-w-[600px] flex-col gap-y-4">
        {links.map((link, index) => (
          <Card key={link.slug + "-" + index}>
            <CardContent className="flex justify-between p-8">
              <div className="font-semibold">{link.slug}</div>
              <div className="w-72 truncate text-right">{link.url}</div>
            </CardContent>
            <CardFooter className="flex justify-end gap-x-2 p-0 px-6 pb-4">
              <CopyButton value={hostname + "/" + link.slug} />
              <form
                action={async () => {
                  "use server";

                  await deleteLink(link.slug);
                }}
              >
                <DeleteButton />
              </form>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
