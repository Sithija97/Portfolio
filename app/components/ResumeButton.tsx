"use client";

import { PERSONAL } from "@/app/data/constants";
import { DocumentIcon } from "./Icons";

export function ResumeButton() {
  const handleDownloadResume = async () => {
    try {
      const response = await fetch("/api/resume");
      if (!response.ok) throw new Error("Resume not found");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = PERSONAL.resumeFilename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch {
      alert("Resume is currently unavailable. Please try again later.");
    }
  };

  return (
    <button
      onClick={handleDownloadResume}
      className="inline-flex items-center gap-2 rounded-lg bg-slate-100 dark:bg-transparent border border-transparent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-card dark:border-[#212529]"
    >
      <DocumentIcon />
      Resume
    </button>
  );
}
