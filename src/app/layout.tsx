import { ReactNode } from 'react';
import RootStyleRegistry from '@/lib/RootStyleRegistry';

import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ko'>
      <body>
        <RootStyleRegistry>{children}</RootStyleRegistry>
      </body>
    </html>
  );
}
