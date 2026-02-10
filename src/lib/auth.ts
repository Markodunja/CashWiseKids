import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { UserRole } from "@/types";

/**
 * MVP: Simple credentials auth. Accepts any email/password; role determined by email prefix.
 * parent@... -> parent, kid@... or anything else -> kid (with childId in session for future).
 */
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email and Password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email) return null;
        const email = credentials.email as string;
        const role: UserRole = email.toLowerCase().startsWith("parent@")
          ? "parent"
          : "kid";
        return {
          id: "mock-id-" + email,
          email,
          name: role === "parent" ? "Parent" : "Kid",
          role,
          childId: role === "kid" ? "child-1" : undefined,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role?: UserRole }).role;
        token.childId = (user as { childId?: string }).childId;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as { role?: UserRole }).role = token.role as UserRole;
        (session.user as { childId?: string }).childId = token.childId as
          | string
          | undefined;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET || "moneysprout-mvp-secret",
};
