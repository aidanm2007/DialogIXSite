export function LogoRow() {
  const logos = ["Apex", "Nimbus", "Vertex", "Sierra", "Helix", "Nova"];
  return (
    <div className="card p-6">
      <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground/90">
        {logos.map((l) => (
          <span key={l} className="text-xs uppercase tracking-[0.4em] text-muted-foreground/80">
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}

