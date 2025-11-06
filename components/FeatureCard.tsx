import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FeatureCard({ title, description, code }: { title: string; description: string; code?: React.ReactNode }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
        {code && <div className="mt-4 overflow-hidden rounded-md border border-white/10">{code}</div>}
      </CardContent>
    </Card>
  );
}

