"use client";
export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  return (
    <html>
      <body>
        <div className="container py-24 text-center">
          <h1 className="text-4xl font-semibold">Something went wrong</h1>
          <p className="mt-2 text-muted-foreground">{error.message}</p>
        </div>
      </body>
    </html>
  );
}

