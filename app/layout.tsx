import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { AppShell } from '@/components/layout/AppShell';
import { theme } from '../theme';

export const metadata = {
  title: 'J Smigen L.L.C.',
  description: 'I am a web developer from New Jersey!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <link rel="shortcut icon" href="/js-logo-196.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body style={{ overflow: 'hidden' }}>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          <AppShell>{children}</AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
