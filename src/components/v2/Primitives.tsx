"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// --- BUTTON ---
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-neutral-200 bg-transparent hover:bg-neutral-50 hover:border-neutral-300 dark:border-neutral-800 dark:hover:bg-neutral-900 transition-all duration-300",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors",
        link: "text-primary underline-offset-4 hover:underline",
        premium: "bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-black/10 dark:shadow-white/5 transition-all duration-300",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-14 rounded-2xl px-10 text-base",
        icon: "h-10 w-10",
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

// --- CARD ---
export function Card({ children, className, hover = true, variant = "default" }: { children: React.ReactNode, className?: string, hover?: boolean, variant?: "default" | "glass" | "outline" }) {
  const variants = {
    default: "bg-white dark:bg-neutral-900 border-neutral-100 dark:border-neutral-800",
    glass: "bg-white/70 dark:bg-neutral-900/70 backdrop-blur-xl border-white/20 dark:border-neutral-800/50",
    outline: "bg-transparent border-2 border-neutral-100 dark:border-neutral-800"
  };

  return (
    <div className={cn(
      "rounded-[2.5rem] border p-8 transition-all duration-500",
      variants[variant],
      hover && "hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-2",
      className
    )}>
      {children}
    </div>
  );
}

// --- FORM INPUT ---
export function FormInput({ label, error, className, ...props }: { label: string, error?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={cn("space-y-2 w-full", className)}>
      <label className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 ml-1">
        {label}
      </label>
      <input
        {...props}
        className={cn(
          "flex h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm transition-all focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:focus:border-primary",
          error && "border-destructive focus:ring-destructive/10"
        )}
      />
      {error && <p className="text-xs font-medium text-destructive ml-1">{error}</p>}
    </div>
  );
}

export { Button, buttonVariants };
