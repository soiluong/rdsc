import type { ReactNode } from 'react';

interface PolicyLayoutProps {
  children: ReactNode;
}

function PolicyLayout({ children }: PolicyLayoutProps) {
  return (
    <main className="py-20">
      <div className="prose mx-auto max-w-4xl text-center font-futura prose-h3:text-2xl">
        {children}
      </div>
    </main>
  );
}

export { PolicyLayout };
