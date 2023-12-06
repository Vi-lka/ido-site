// https://<site.com>/api/revalidate?tag=<tag>&secret=<token>
// http://localhost:3000/api/revalidate?tag=<tag>&secret=<token>

import { revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// Strapi Webhook is POST, not GET (Error 405)

// eslint-disable-next-line @typescript-eslint/require-await
export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  const secret = request.nextUrl.searchParams.get("secret");
  try {
    //prevent unauthorized access
    if (secret !== process.env.REVALIDATE_TOKEN)
      throw new Error("Unauthorized");
    //find tag
    if (!tag) throw new Error("Tag not found");

    revalidateTag(tag);
    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error) {
    return NextResponse.json({
      revalidated: false,
      now: Date.now(),
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
