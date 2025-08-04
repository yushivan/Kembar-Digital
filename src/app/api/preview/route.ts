import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get("slug") || "/";

  const redirectUrl = new URL(slug, req.nextUrl.origin); 

  (await draftMode()).enable();
  return NextResponse.redirect(redirectUrl);
}
