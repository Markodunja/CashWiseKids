import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <main
      className={cn(
        "mx-auto w-full max-w-2xl px-4 py-6 pb-24 sm:pb-6",
        className
      )}
    >
      {children}
    </main>
  );
}
