import { db } from "@/server/db";

export async function GET() {
  const links = await db.query.links.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return Response.json({ data: links });
}
