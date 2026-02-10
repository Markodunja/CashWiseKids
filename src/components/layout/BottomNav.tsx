"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { KID_NAV } from "@/constants/nav";
import { cn } from "@/lib/utils";

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-primary/20 bg-bg-warm-alt/95 backdrop-blur supports-[backdrop-filter]:bg-bg-warm-alt/80"
      role="navigation"
      aria-label="Main navigation"
    >
      <ul className="mx-auto flex max-w-2xl items-center justify-around px-2 py-2">
        {KID_NAV.map(({ path, label, icon: Icon }) => {
          const isActive =
            path === "/"
              ? pathname === "/"
              : pathname.startsWith(path);
          return (
            <li key={path}>
              <Link
                href={path}
                className={cn(
                  "flex min-h-tap-target min-w-tap-target flex-col items-center justify-center gap-1 rounded-card px-3 py-2 text-xs font-medium transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-text-dark/70 hover:text-primary"
                )}
                aria-current={isActive ? "page" : undefined}
                aria-label={label}
              >
                <Icon
                  className="h-6 w-6 shrink-0"
                  aria-hidden
                />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
