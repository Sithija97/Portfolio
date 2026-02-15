"use client";

import { PERSONAL } from "@/app/data/constants";

export function Footer() {
  return (
    <footer className="border-t border-border pt-8">
      <div className="flex items-center justify-between">
        <p className="text-xs text-muted">
          &copy; {new Date().getFullYear()} {PERSONAL.name}
        </p>
        <p className="font-mono text-xs text-muted/50">Built with Next.js</p>
      </div>
    </footer>
  );
}
