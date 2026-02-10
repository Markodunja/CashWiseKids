"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PARENT_NAV } from "@/constants/nav";
import { cn } from "@/lib/utils";

export function ParentNav() {
  const pathname = usePathname();

  return (
    <nav
      className="border-b border-primary/20 bg-bg-warm-alt"
      role="navigation"
      aria-label="Parent navigation"
    >
      <ul className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-1 px-4 py-3 sm:gap-2">
        {PARENT_NAV.map(({ path, label, icon: Icon }) => {
          const isActive =
            path === "/parent"
              ? pathname === "/parent"
              : pathname.startsWith(path);
          return (
            <li key={path}>
              <Link
                href={path}
                className={cn(
                  "flex min-h-tap-target items-center justify-center gap-2 rounded-button px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-white"
                    : "text-text-dark hover:bg-primary/10 hover:text-primary"
                )}
                aria-current={isActive ? "page" : undefined}
                aria-label={label}
              >
                <Icon className="h-5 w-5 shrink-0" aria-hidden />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
