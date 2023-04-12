import './globals.css';
import { ReactNode } from 'react';

import StyledComponentsRegistry from '@/lib/registry';
import { ThemeWrapper } from '@/app/theme-wrapper';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ko'>
      <body>
        <StyledComponentsRegistry>
          <ThemeWrapper>{children}</ThemeWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
