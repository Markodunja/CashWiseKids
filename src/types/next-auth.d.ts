import type { UserRole } from "./index";

declare module "next-auth" {
  interface User {
    role?: UserRole;
    childId?: string;
  }

  interface Session {
    user: User & {
      role?: UserRole;
      childId?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: UserRole;
    childId?: string;
  }
}
