import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="inline-block h-5 w-5 rounded bg-gradient-to-br from-neon-from to-neon-to" />
          <span>© {new Date().getFullYear()} Dialog IX</span>
        </div>
        <nav className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link className="hover:text-foreground" href="/about">About</Link>
          <Link className="hover:text-foreground" href="/(legal)/privacy">Privacy</Link>
          <Link className="hover:text-foreground" href="/(legal)/terms">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}

