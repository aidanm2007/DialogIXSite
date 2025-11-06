"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function CodeBlock({ code, language = "tsx" }: { code: string; language?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative">
      <pre className="overflow-auto rounded-lg border border-white/10 bg-black/60 p-4 text-xs leading-relaxed text-foreground/90">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <div className="absolute right-2 top-2">
        <Button
          size="sm"
          onClick={() => {
            navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
          }}
        >
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
    </div>
  );
}

