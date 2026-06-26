"use client";

import React from "react";

interface CalloutProps {
  label?: string;
  children: React.ReactNode;
}

export function Callout({ label = "Note", children }: CalloutProps) {
  return (
    <aside className="flex gap-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 p-4 my-6 text-sm text-neutral-700 dark:text-neutral-300">
      <span className="shrink-0 text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
        {label}
      </span>
      <div>{children}</div>
    </aside>
  );
}
