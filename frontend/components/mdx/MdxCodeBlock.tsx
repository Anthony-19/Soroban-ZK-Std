"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

interface MdxCodeBlockProps {
  children?: React.ReactNode;
  className?: string;
}

export function MdxCodeBlock({ children, className }: MdxCodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [html, setHtml] = useState("");
  const codeRef = useRef<HTMLElement | HTMLDivElement>(null);
  const rawLang = /language-([\w-]+)/.exec(className ?? "")?.[1] ?? "text";
  const lang = rawLang.replace(/^diff-/, "");
  const code = useMemo(() => String(children ?? "").replace(/\n$/, ""), [children]);
  const isDiff = rawLang.startsWith("diff") || code.split("\n").some((line) => /^[+-](?![+-])/.test(line));

  useEffect(() => {
    if (isDiff) {
      setHtml("");
      return;
    }

    let active = true;
    async function highlight() {
      try {
        const shiki = await import("shiki");
        const highlighter = await shiki.createHighlighter({
          themes: ["github-dark"],
          langs: ["typescript", "javascript", "bash", "json", "markdown", "rust", "toml", "text"],
        });
        const normalizedLang = lang === "ts" ? "typescript" : lang === "js" ? "javascript" : lang;
        const nextHtml = highlighter.codeToHtml(code, {
          lang: normalizedLang,
          theme: "github-dark",
        });
        if (active) setHtml(nextHtml);
      } catch {
        if (active) setHtml("");
      }
    }

    highlight();
    return () => {
      active = false;
    };
  }, [code, isDiff, lang]);

  const handleCopy = async () => {
    const text = codeRef.current?.textContent?.trim() ?? code.trim();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const labels: Record<string, string> = {
      ts: "TypeScript",
      typescript: "TypeScript",
      js: "JavaScript",
      javascript: "JavaScript",
      bash: "Bash",
      json: "JSON",
      diff: "Diff",
      text: "Text",
  };
  const label = labels[rawLang] ?? rawLang.toUpperCase();

  return (
    <div className="group rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 my-6 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
        <span className="text-xs font-mono font-semibold text-neutral-500 dark:text-neutral-400">
          {label}
        </span>
        <button
          onClick={handleCopy}
          className={`p-1.5 rounded-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white ${
            copied
              ? "text-green-600 dark:text-green-400"
              : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
          }`}
          aria-label={copied ? "Copied!" : "Copy code"}
        >
          {copied ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>
      {isDiff ? (
        <pre className="overflow-x-auto text-sm" aria-label={`${label} code block`}>
          <code ref={codeRef} className="block min-w-max font-mono text-neutral-800 dark:text-neutral-200">
            {code.split("\n").map((line, index) => {
              const removed = line.startsWith("-");
              const added = line.startsWith("+");
              return (
                <span
                  key={`${line}-${index}`}
                  className={`block whitespace-pre px-4 py-0.5 border-l-4 ${
                    removed
                      ? "border-red-500 bg-red-500/10 text-red-700 dark:text-red-300"
                      : added
                        ? "border-green-500 bg-green-500/10 text-green-700 dark:text-green-300"
                        : "border-transparent"
                  }`}
                >
                  {line || " "}
                </span>
              );
            })}
          </code>
        </pre>
      ) : html ? (
        <div
          ref={codeRef as React.RefObject<HTMLDivElement>}
          className="overflow-x-auto text-sm [&_pre]:!m-0 [&_pre]:!bg-transparent [&_pre]:!p-4 [&_code]:font-mono"
          dangerouslySetInnerHTML={{ __html: html }}
          aria-label={`${label} code block`}
          role="region"
          tabIndex={0}
        />
      ) : (
        <pre className="p-4 overflow-x-auto text-sm">
          <code ref={codeRef} className={`${className ?? ""} text-neutral-800 dark:text-neutral-200 font-mono`}>
            {code}
          </code>
        </pre>
      )}
    </div>
  );
}
