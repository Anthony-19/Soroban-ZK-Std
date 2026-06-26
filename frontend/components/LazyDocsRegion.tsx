"use client";

import React, { useEffect, useRef, useState } from "react";

export function LazyDocsRegion({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div ref={ref} aria-busy={!visible}>
      {visible ? (
        children
      ) : (
        <div className="my-10 space-y-4" aria-label="Loading documentation section">
          <div className="h-6 w-2/3 rounded bg-neutral-100 dark:bg-neutral-900 animate-pulse" />
          <div className="h-4 w-full rounded bg-neutral-100 dark:bg-neutral-900 animate-pulse" />
          <div className="h-4 w-5/6 rounded bg-neutral-100 dark:bg-neutral-900 animate-pulse" />
        </div>
      )}
    </div>
  );
}
