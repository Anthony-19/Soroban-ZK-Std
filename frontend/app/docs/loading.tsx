import { DocsLayout } from "@/components/DocsLayout";

export default function LoadingContentPage() {
  return (
    <DocsLayout>
      <div className="max-w-3xl" role="status" aria-label="Loading documentation">
        <div className="mb-8 h-4 w-56 rounded bg-neutral-100 dark:bg-neutral-900 animate-pulse" />
        <div className="mb-6 h-10 w-3/4 rounded bg-neutral-100 dark:bg-neutral-900 animate-pulse" />
        <div className="space-y-4">
          <div className="h-4 w-full rounded bg-neutral-100 dark:bg-neutral-900 animate-pulse" />
          <div className="h-4 w-11/12 rounded bg-neutral-100 dark:bg-neutral-900 animate-pulse" />
          <div className="h-4 w-4/5 rounded bg-neutral-100 dark:bg-neutral-900 animate-pulse" />
        </div>
      </div>
    </DocsLayout>
  );
}
