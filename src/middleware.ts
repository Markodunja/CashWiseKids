import { withAuth } from "next-auth/middleware";

/**
 * Protect kid and parent app routes. Redirect unauthenticated to login.
 * Role-based redirect: after login, parent -> /parent, kid -> /
 */
export default withAuth(
  function middleware(req) {
    const token = req.nextauth?.token as
      | { role?: "parent" | "kid"; email?: string }
      | null
      | undefined;
    const path = req.nextUrl.pathname;

    if (path === "/" && token?.role === "parent") {
      return Response.redirect(new URL("/parent", req.url));
    }
    if (path.startsWith("/parent") && token?.role === "kid") {
      return Response.redirect(new URL("/", req.url));
    }
    return;
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    "/quests/:path*",
    "/goals",
    "/savings",
    "/achievements",
    "/shop-virtual",
    "/profile",
    "/parent/:path*",
    "/store",
  ],
};
