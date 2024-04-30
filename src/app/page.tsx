import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createLink } from "@/server/queries";
import { Plus } from "lucide-react";

export default function HomePage() {
  return (
    <main className="container flex h-full flex-col items-center justify-center p-4">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="text-xl">Create New</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            action={async (formData: FormData) => {
              "use server";

              const redirectUrl = formData.get("redirectUrl") as string;
              const slug = formData.get("slug") as string | null;

              await createLink(redirectUrl, slug);
            }}
          >
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-2">
                <Label htmlFor="redirectUrl">Redirect URL</Label>
                <Input
                  id="redirectUrl"
                  name="redirectUrl"
                  type="url"
                  placeholder="https://example.com/"
                  required
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <Label htmlFor="slug">Short URL (leave blank for random)</Label>
                <div className="flex items-center gap-x-2">
                  https://links.sml.wtf/
                  <Input id="slug" name="slug" placeholder="hgyenb" />
                </div>
              </div>
              <Button className="gap-x-2 self-end" type="submit">
                <Plus className="h-4 w-4" />
                Create
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
