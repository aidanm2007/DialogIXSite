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
        <div key={p.title} className="rounded-lg border border-white/10 bg-card/50 p-4">
          <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-white/5 px-2 py-1 text-sm">
            <span className="text-accent">{iconMap[p.icon]}</span>
            <span className="font-medium">{p.title}</span>
          </div>
          <p className="text-sm text-muted-foreground">{p.description}</p>
        </div>
      ))}
    </div>
  );
}

