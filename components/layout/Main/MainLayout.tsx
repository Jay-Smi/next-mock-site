import { ReactNode, useEffect } from 'react';
import { AppShell, ScrollArea } from '@mantine/core';
import { useHash } from '@mantine/hooks';
import { useAppShellStore } from '../hooks/useAppShellStore';
import { useMainContentHeight } from '../hooks/useMainContentHeight';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  // ** global state *8 //
  const { setScrollPosition, mainScrollAreaRef } = useAppShellStore();
  const mainHeight = useMainContentHeight();
  const [hash] = useHash();

  // ** handlers ** //
  const scrollToElement = () => {
    hash &&
      mainScrollAreaRef.current?.querySelector(hash)?.scrollIntoView({
        behavior: 'smooth',
      });
  };

  useEffect(() => scrollToElement(), [hash]);

  return (
    <AppShell.Main>
      <ScrollArea
        ref={mainScrollAreaRef}
        h={mainHeight}
        scrollbars="y"
        pb="md"
        type="auto"
        scrollbarSize={16}
        onScrollPositionChange={(val) => setScrollPosition(val.y)}
      >
        {children}
      </ScrollArea>
    </AppShell.Main>
  );
};
