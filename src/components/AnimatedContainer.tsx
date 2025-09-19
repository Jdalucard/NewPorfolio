"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AnimatedContainer({ children }: Props) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -40 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="h-full w-full overflow-x-hidden"
        style={{ overflowX: 'hidden' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
