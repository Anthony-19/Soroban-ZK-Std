"use client";

import React from "react";

type AlertType = "info" | "warning" | "error" | "success";

interface AlertProps {
  type?: AlertType;
  children: React.ReactNode;
}

const styles: Record<AlertType, { border: string; bg: string; icon: string; label: string }> = {
  info: {
    border: "border-blue-500/40",
    bg: "bg-blue-500/10",
    icon: "i",
    label: "Info",
  },
  warning: {
    border: "border-amber-500/40",
    bg: "bg-amber-500/10",
    icon: "!",
    label: "Warning",
  },
  error: {
    border: "border-red-500/40",
    bg: "bg-red-500/10",
    icon: "x",
    label: "Error",
  },
  success: {
    border: "border-green-500/40",
    bg: "bg-green-500/10",
    icon: "ok",
    label: "Success",
  },
};

export function Alert({ type = "info", children }: AlertProps) {
  const style = styles[type];

  return (
    <div
      role="alert"
      aria-label={`${style.label} callout`}
      className={`flex gap-3 rounded-lg border ${style.border} ${style.bg} p-4 my-6 text-sm text-neutral-700 dark:text-neutral-300`}
    >
      <span className="shrink-0 font-bold uppercase" aria-hidden="true">
        {style.icon}
      </span>
      <div>{children}</div>
    </div>
  );
}
