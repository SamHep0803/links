import { db } from "@/server/db";

export const runtime = "edge";

export async function GET() {
  const links = await db.query.links.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return Response.json({ data: links });
}
