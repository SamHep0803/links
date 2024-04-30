import { generateSlug } from "@/lib/utils";
import "server-only";

export async function createLink(url: string, slug: string | null) {
  if (!slug) {
    slug = generateSlug();
  }

  return slug;
}

export async function deleteLink(slug: string) {
  return slug;
}
