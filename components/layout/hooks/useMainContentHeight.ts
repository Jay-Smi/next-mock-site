import { useIsHeaderCollapsed } from './useIsHeaderCollapsed';

export const useMainContentHeight = () => {
  const collapseHeader = useIsHeaderCollapsed();

  const height = `calc(100vh${collapseHeader ? '' : ' - var(--app-shell-header-height) '})`;

  return height;
};
