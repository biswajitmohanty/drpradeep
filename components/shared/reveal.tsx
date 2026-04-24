"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

type Tag = "div" | "li" | "section" | "ul" | "ol" | "article" | "aside";

interface RevealProps {
  delay?: number;
  y?: number;
  as?: Tag;
  className?: string;
  children?: ReactNode;
  id?: string;
  style?: CSSProperties;
  role?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-hidden"?: boolean;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  delay = 0,
  y = 24,
  as = "div",
  children,
  className,
  ...rest
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease, delay }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
