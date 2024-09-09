import { AppShell } from '@mantine/core';
import { RouteTabs } from '../RouteTabs';

export const MobileNavbar = () => (
  <AppShell.Navbar p="md">
    <RouteTabs
      orientation="vertical"
      variant="pills"
      listProps={{
        w: '100%',
      }}
    />
  </AppShell.Navbar>
);
