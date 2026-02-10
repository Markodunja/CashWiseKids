import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-button min-h-tap-target min-w-tap-target px-6 py-3 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-primary-accent active:bg-deep-green",
        secondary:
          "bg-accent text-navy hover:bg-primary/90 active:bg-deep-green",
        orange: "bg-orange text-white hover:bg-orange/90 active:bg-orange/80",
        gold: "bg-gold text-navy hover:bg-gold-dark active:bg-gold-dark/90",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary/10",
        ghost: "hover:bg-primary/10 hover:text-primary",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-10 px-4 rounded-xl",
        lg: "h-14 px-8 rounded-card",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
