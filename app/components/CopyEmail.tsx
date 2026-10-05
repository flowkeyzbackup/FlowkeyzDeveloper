"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard blocked: the address is shown as selectable text next to the button.
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <code className="break-all rounded-md bg-surface px-3.5 py-2.5 font-mono text-[1.05rem] select-all">
        {email}
      </code>
      <button
        type="button"
        onClick={copy}
        className="rounded-md border border-fg px-4 py-2 text-sm font-semibold transition hover:bg-surface"
      >
        {copied ? "Copied" : "Copy email"}
      </button>
      <a
        href={`mailto:${email}`}
        className="rounded-md border border-accent bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg transition hover:brightness-110"
      >
        Send an email
      </a>
    </div>
  );
}