"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Delay = "0" | "1" | "2";

export function Reveal({
  children,
  delay = "0",
  className = "",
}: {
  children: ReactNode;
  delay?: Delay;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal=""
      data-reveal-delay={delay === "0" ? undefined : delay}
      className={`${className} ${visible ? "is-visible" : ""}`.trim()}
    >
      {children}
    </div>
  );
}
