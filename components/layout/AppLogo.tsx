import { Center, Group, Title, useMatches } from '@mantine/core';
import { AppIcon } from './AppIcon';

export const AppLogo = ({ className }: { className?: string }) => {
  const header = useMatches({
    base: '',
    md: 'J Smigen Development',
  });

  return (
    <Group h="100%" className={className}>
      <Center
        bg="var(--mantine-primary-color-4)"
        style={{
          borderRadius: 'var(--mantine-radius-md)',
          border: '3px solid var(--mantine-color-dark-9)',
        }}
      >
        <AppIcon />
      </Center>

      <Title fz="h3">{header}</Title>
    </Group>
  );
};
