'use client';

import { IconMoonStars, IconSun } from '@tabler/icons-react';
import cx from 'clsx';
import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import classes from './ColorSchemeToggle.module.css';

export function ColorSchemeToggle() {
  // ** global state ** //\
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light');

  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="default"
      size="lg"
      aria-label="Toggle color scheme"
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={2.5} />
      <IconMoonStars className={cx(classes.icon, classes.dark)} stroke={2.5} />
    </ActionIcon>
  );
}
