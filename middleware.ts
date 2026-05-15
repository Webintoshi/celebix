import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SITE_URL, getHostName, isOldHost } from "@/lib/site";

function buildPublicRedirectUrl(request: NextRequest, pathname: string) {
  const destination = new URL(pathname, SITE_URL);
  destination.search = request.nextUrl.search;
  return destination;
}

export function middleware(request: NextRequest) {
  const host = getHostName(request.headers.get("host"));
  const pathname = request.nextUrl.pathname;
  let targetPathname = pathname;
  let shouldRedirect = false;

  if (isOldHost(host)) {
    shouldRedirect = true;
  }

  if (pathname === "/") {
    targetPathname = "/tr";
    shouldRedirect = true;
  }

  if (pathname === "/tr/") {
    targetPathname = "/tr";
    shouldRedirect = true;
  }
  if (pathname === "/en/") {
    targetPathname = "/en";
    shouldRedirect = true;
  }

  if (shouldRedirect) {
    return NextResponse.redirect(buildPublicRedirectUrl(request, targetPathname), 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|css|js|map)$).*)",
  ],
};
