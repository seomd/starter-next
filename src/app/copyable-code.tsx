"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function CopyableCode({
  value,
  className = "",
  copiedLabel = "Copied",
  copyLabel = "Copy",
}: {
  value: string;
  className?: string;
  copiedLabel?: string;
  copyLabel?: string;
}) {
  const [copied, setCopied] = useState(false);
  const resetTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    if (resetTimerRef.current) {
      window.clearTimeout(resetTimerRef.current);
    }

    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = value;
      textarea.setAttribute("readonly", "true");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
      setCopied(true);
    }

    resetTimerRef.current = window.setTimeout(() => {
      setCopied(false);
    }, 1200);
  };

  const buttonText = useMemo(() => (copied ? copiedLabel : copyLabel), [
    copied,
    copiedLabel,
    copyLabel,
  ]);

  return (
    <div className={`flex items-stretch gap-3 ${className}`}>
      <div
        className="min-w-0 flex-1 rounded-xl border border-zinc-200 bg-zinc-900 px-4 py-3"
        onClick={handleCopy}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            void handleCopy();
          }
        }}
      >
        <div className="overflow-x-auto whitespace-nowrap [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <code className="block font-mono text-sm font-medium text-emerald-400">
            {value}
          </code>
        </div>
      </div>

      <button
        type="button"
        onClick={() => void handleCopy()}
        className="shrink-0 rounded-xl border border-zinc-200 bg-white/70 px-4 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition-colors hover:bg-white"
        aria-label={copyLabel}
      >
        {buttonText}
      </button>
    </div>
  );
}
