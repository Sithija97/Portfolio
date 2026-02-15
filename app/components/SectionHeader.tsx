interface SectionHeaderProps {
  title: string;
  className?: string;
}

export function SectionHeader({
  title,
  className = "mb-8",
}: SectionHeaderProps) {
  return (
    <>
      <h2 className="mb-1 text-sm font-medium uppercase tracking-widest text-muted">
        {title}
      </h2>
      <div className={`h-px w-8 bg-border ${className}`} />
    </>
  );
}
