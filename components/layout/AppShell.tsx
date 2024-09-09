'use client';

import { ReactNode } from 'react';
import { AppShell as MantineAppShell } from '@mantine/core';
import { Header } from './Header/Header';
import { useAppShellStore } from './hooks/useAppShellStore';
import { useIsHeaderCollapsed } from './hooks/useIsHeaderCollapsed';
import { MainLayout } from './Main/MainLayout';
import { MobileNavbar } from './Navbar/MobileNavbar';

export const AppShell = ({ children }: { children: ReactNode }) => {
  // ** global state **
  const { isNavbarOpen } = useAppShellStore();
  const collapseHeader = useIsHeaderCollapsed();
  // ** local state ** //

  // ** local vars ** //
  console.log(collapseHeader);

  // ** handlers ** //
  return (
    <MantineAppShell
      header={{ height: 60, collapsed: collapseHeader, offset: true }}
      navbar={{
        width: {
          sm: 300,
        },
        breakpoint: 'sm',
        collapsed: { mobile: !isNavbarOpen, desktop: true },
      }}
    >
      <Header />

      <MobileNavbar />

      <MainLayout>{children}</MainLayout>
    </MantineAppShell>
  );
};
