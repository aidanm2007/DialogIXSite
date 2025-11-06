export function LogoRow() {
  const logos = ["Apex", "Nimbus", "Vertex", "Sierra", "Helix", "Nova"];
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
      <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
        {logos.map((l) => (
          <span key={l} className="text-sm tracking-widest text-muted-foreground">{l}</span>
        ))}
      </div>
    </div>
  );
}

