"use client";

import { DocsLayout } from "@/components/DocsLayout";

export default function ContentError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <DocsLayout>
      <div className="max-w-2xl rounded-lg border border-red-500/30 bg-red-500/10 p-6" role="alert">
        <p className="text-sm font-semibold uppercase tracking-wider text-red-700 dark:text-red-300">
          Documentation failed to load
        </p>
        <h1 className="mt-2 text-2xl font-bold text-black dark:text-white">
          Try refreshing this page
        </h1>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400">
          {error.message || "An unexpected rendering error occurred."}
        </p>
        <button
          onClick={reset}
          className="mt-5 rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:bg-white dark:text-black dark:hover:bg-neutral-200 dark:focus-visible:ring-white"
        >
          Retry
        </button>
      </div>
    </DocsLayout>
  );
}
