import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
  initial?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
}

export function SectionWrapper({
  children,
  className,
  id,
  containerClassName,
  initial = { opacity: 0, y: 20 },
  whileInView = { opacity: 1, y: 0 },
  viewport = { once: true, margin: "-100px" },
  transition = { duration: 0.5, ease: "easeOut" },
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-20 md:py-28 overflow-hidden", className)}>
      <motion.div
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
        transition={transition}
        className={cn("container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl", containerClassName)}
      >
        {children}
      </motion.div>
    </section>
  );
}
