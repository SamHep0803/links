import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

export default function HomePage() {
  return (
    <main className="container flex h-full flex-col items-center justify-center p-4 md:max-w-[1000px]">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl">Create New</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col gap-y-2">
                <Label htmlFor="redirect">Redirect URL</Label>
                <Input
                  id="redirect"
                  type="url"
                  placeholder="https://example.com/"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <Label htmlFor="short">
                  Short URL (leave blank for random)
                </Label>
                <div className="flex items-center gap-x-2">
                  https://links.sml.wtf/
                  <Input id="short" type="url" placeholder="hgyenb" />
                </div>
              </div>
              <Button className="gap-x-2 self-end">
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
