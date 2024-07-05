"use client";
import { animate } from "framer-motion";
import { useEffect, useRef } from "react";
export const NumberScramble = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const controls = animate(0, value, {
      duration: 0.6,
      ease: "easeInOut",
      onUpdate(value) {
        if (!ref.current?.textContent) return;
        const currentVal = Number(String(value).slice(0));
        ref.current.textContent = `$${currentVal.toFixed(2)}`;
      },
    });
    return () => controls.stop();
  }, [value]);
  return <span ref={ref}>$0.00</span>;
};
