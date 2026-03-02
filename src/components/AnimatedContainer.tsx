"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AnimatedContainer({ children }: Props) {
  const pathname = usePathname();
  const [animKey, setAnimKey] = React.useState(pathname);
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  React.useEffect(() => {
    if (pathname !== animKey) {
      setAnimKey(pathname);
    }
  }, [pathname, animKey]);

  const initialAnimation = hasMounted
    ? { opacity: 0, x: 40 }
    : false;

  return (
    <motion.div
      key={animKey}
      initial={initialAnimation}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="h-full w-full overflow-x-hidden"
      style={{ overflowX: "hidden" }}
    >
      {children}
    </motion.div>
  );
}
