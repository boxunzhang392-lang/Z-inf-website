"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ComponentProps, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "article" | "li";
  tabIndex?: number;
  ariaLabel?: string;
};

export function Reveal({ children, className, delay = 0, as = "div", tabIndex, ariaLabel }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] as React.ComponentType<ComponentProps<typeof motion.div>>;

  return (
    <MotionTag
      className={className}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      initial={reduceMotion ? false : { opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduceMotion ? 0 : 0.72, delay: reduceMotion ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
