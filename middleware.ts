import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PRIMARY_HOST, getHostName, isOldHost } from "@/lib/site";

export function middleware(request: NextRequest) {
  const host = getHostName(request.headers.get("host"));
  const url = request.nextUrl.clone();
  const pathname = request.nextUrl.pathname;
  let shouldRedirect = false;

  if (isOldHost(host)) {
    url.protocol = "https";
    url.host = PRIMARY_HOST;
    shouldRedirect = true;
  }

  if (pathname === "/") {
    url.pathname = "/tr";
    shouldRedirect = true;
  }

  if (pathname === "/tr/") {
    url.pathname = "/tr";
    shouldRedirect = true;
  }
  if (pathname === "/en/") {
    url.pathname = "/en";
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|css|js|map)$).*)",
  ],
};
