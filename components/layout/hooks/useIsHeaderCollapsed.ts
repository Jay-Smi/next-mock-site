import { useMatches } from '@mantine/core';
import { useAppShellStore } from './useAppShellStore';

export const useIsHeaderCollapsed = () => {
  const { mainScrollPosition } = useAppShellStore();
  // ** local state ** //
  const isMobile = useMatches({ base: true, sm: false });

  return isMobile ? false : mainScrollPosition >= 200;
};
