"use client";

import { useMemo, useEffect, useState } from "react";
import { Variants } from "framer-motion";

export function useAnimateTitle(
  phrases: string[] = [],
  loop: boolean = false,
  interval: number = 5000
) {
  const [key, setKey] = useState(0);
  const [index, setIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!loop || !isClient || phrases.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
      setKey((prev) => prev + 1); 
    }, interval);
    return () => clearInterval(timer);
  }, [loop, interval, isClient, phrases]);

  const container: Variants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    }),
    []
  );

  const letter: Variants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 10 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
          ease: "easeOut",
        },
      },
    }),
    []
  );

  return {
    container,
    letter,
    key,
    currentPhrase: phrases[index] ?? "",
  };
}
