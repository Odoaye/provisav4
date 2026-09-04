import { ArrowLeft, AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="w-full max-w-md border border-border bg-secondary/40 p-8 md:p-12">
        <AlertCircle className="text-accent" size={28} />
        <h1 className="mt-6 font-display text-4xl">Page not found.</h1>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">This field note has not been added yet.</p>
        <a href="/" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent"><ArrowLeft size={15} /> Return to site</a>
      </div>
    </div>
  );
}