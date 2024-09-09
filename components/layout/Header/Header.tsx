import Link from 'next/link';
import { Icon } from '@iconify/react';
import { ActionIcon, AppShell, Burger, Center, Group } from '@mantine/core';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { AppLogo } from '../AppLogo';
import { useAppShellStore } from '../hooks/useAppShellStore';
import { RouteTabs } from '../RouteTabs';

export const Header = () => {
  // ** global state **
  const { isNavbarOpen, toggleNavbar } = useAppShellStore();

  // ** local state ** //

  // ** local vars ** //

  // ** handlers ** //
  return (
    <AppShell.Header>
      <Group justify="space-between" px="md" h="100%">
        <Group h="100%" align="center">
          <Burger opened={isNavbarOpen} onClick={toggleNavbar} hiddenFrom="sm" size="sm" />
          <Center>
            <AppLogo />
          </Center>

          <RouteTabs visibleFrom="sm" style={{ alignSelf: 'flex-end' }} variant="outline" />
        </Group>
        <Group>
          <ActionIcon
            component={Link}
            href="https://github.com/jay-smi"
            target="_blank"
            variant="default"
            size="lg"
            aria-label="My Github"
          >
            <Icon icon="tabler:brand-github" height={22} width={22} />
          </ActionIcon>
          <ColorSchemeToggle />
        </Group>
      </Group>
      {/* <Box h="100%" w="100%" style={{ position: 'relative' }}>
            <Group
              py={0}
              px="3px"
              gap="4px"
              h="47px"
              style={{
                borderBottom: '1px solid var(--mantine-color-default-border)',
                alignContent: 'center',
              }}
            >
              <Burger opened={opened} onClick={toggle} size="sm" aria-label="Toggle navigation" />
              <HomeButton className={classes.scaleLeft} />
            </Group>

            <Drawer
              withinPortal={false}
              styles={{
                inner: { position: 'absolute' },
                body: { padding: 0, display: 'flex', justifyContent: 'center' },
              }}
              opened={opened}
              onClose={close}
              title="Navigate"
              size={220}
              radius="md"
              offset={8}
            >
              <RouteTabs orientation="vertical" />
            </Drawer>
          </Box> */}
    </AppShell.Header>
  );
};
