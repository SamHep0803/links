import { generateSlug } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import "server-only";
import { db } from "./db";
import { links } from "./db/schema";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export async function getLinks() {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  const links = await db.query.links.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return links;
}

export async function getLink(slug: string) {
  const link = await db.query.links.findFirst({
    where: (model, { eq }) => eq(model.slug, slug),
  });

  if (!link) throw new Error("Not found");

  return link.url;
}

export async function createLink(url: string, slug: string | null) {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  if (!slug) {
    slug = generateSlug();
  }

  await db.insert(links).values({
    slug,
    url,
  });

  revalidatePath("/links");
  redirect("/links");
}

export async function deleteLink(slug: string) {
  const user = auth();

  if (!user.userId) throw new Error("Unauthorized");

  await db.delete(links).where(eq(links.slug, slug));

  revalidatePath("/links");
}
