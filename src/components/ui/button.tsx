import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-orange-400 to-primary text-white hover:from-orange-500 hover:to-primary-glow shadow-medium hover:shadow-large hover:scale-105 active:scale-95 rounded-full",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-lg",
        outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground rounded-full hover:scale-105 active:scale-95",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-lg",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-orange-400 to-primary text-white hover:from-orange-500 hover:to-primary-glow shadow-large hover:shadow-xl hover:scale-105 active:scale-95 rounded-full",
        heroOutline: "border-2 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 hover:border-primary-foreground/50 rounded-full hover:scale-105 active:scale-95",
        nav: "bg-primary text-primary-foreground hover:bg-primary-glow shadow-soft hover:shadow-medium hover:scale-105 active:scale-95 rounded-full",
      },
      size: {
        default: "h-10 sm:h-11 px-4 sm:px-6 py-2 text-sm",
        sm: "h-8 sm:h-9 px-3 sm:px-4 text-xs sm:text-sm",
        lg: "h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base",
        xl: "h-12 sm:h-14 px-6 sm:px-8 md:px-10 text-base sm:text-lg",
        icon: "h-9 sm:h-10 w-9 sm:w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };