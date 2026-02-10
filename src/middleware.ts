import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Lightweight auth check: protect routes by session cookie only (no JWT decode in Edge).
 * Avoids MIDDLEWARE_INVOCATION_FAILED from next-auth withAuth on Vercel Edge.
 */
const PROTECTED_PATHS = [
  "/quests",
  "/goals",
  "/savings",
  "/achievements",
  "/shop-virtual",
  "/profile",
  "/parent",
  "/store",
];

function isProtected(pathname: string): boolean {
  return PROTECTED_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );
}

export function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  if (!isProtected(pathname)) {
    return NextResponse.next();
  }

  const sessionToken = req.cookies.get("next-auth.session-token")?.value;
  if (!sessionToken) {
    const loginUrl = new URL("/login", req.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/quests/:path*",
    "/goals",
    "/goals/:path*",
    "/savings",
    "/achievements",
    "/shop-virtual",
    "/profile",
    "/parent/:path*",
    "/store",
  ],
};
