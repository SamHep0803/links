import { getLink } from "@/server/queries";
import { redirect } from "next/navigation";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } },
) {
  const link = await getLink(params.slug);
  if (!link) return redirect("/");
  return redirect(link);
}
