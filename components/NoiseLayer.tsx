export function NoiseLayer() {
  if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-soft-light"
      style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\'><filter id=\'n\'><feTurbulence baseFrequency=\'.65\' numOctaves=\'2\' /></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.35\'/></svg>')" }}
    />
  );
}

