import { pillars } from "@/lib/utils";
import { Bot, Calendar, MousePointerClick, RefreshCw } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "mouse-pointer": <MousePointerClick className="h-5 w-5" />,
  bot: <Bot className="h-5 w-5" />,
  calendar: <Calendar className="h-5 w-5" />,
  sync: <RefreshCw className="h-5 w-5" />,
};

export function Pillars() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {pillars.map((p) => (
        <div key={p.title} className="card p-5">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/5 bg-surface-700/60 px-3 py-1.5 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="text-gold">{iconMap[p.icon]}</span>
            <span className="font-semibold text-foreground">{p.title}</span>
          </div>
          <p className="text-sm text-muted-foreground">{p.description}</p>
        </div>
      ))}
    </div>
  );
}
