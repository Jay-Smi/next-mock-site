import { Icon } from '@iconify/react';
import { rem, Tabs, TabsListProps, TabsProps, TabsTabProps, useMatches } from '@mantine/core';
import { useHash } from '@mantine/hooks';
import { useAppShellStore } from './hooks/useAppShellStore';

const iconStyle = { width: rem(22), height: rem(22) };

const ROUTES = [
  {
    label: 'About Me',
    value: 'About_Me',
    leftSection: <Icon icon="tabler:question-mark" style={iconStyle} />,
  },

  {
    label: 'Resume',
    value: 'Resume',
    leftSection: <Icon icon="tabler:address-book" style={iconStyle} />,
  },
  {
    label: 'Projects',
    value: 'Projects',
    leftSection: <Icon icon="tabler:apps" style={iconStyle} />,
  },
];

interface RouteTabsProps extends TabsProps {
  listProps?: Omit<TabsListProps, 'children'>;
  tabProps?: Omit<TabsTabProps, 'value' | 'leftSection'>;
}

export const RouteTabs = ({ listProps, tabProps, ...props }: RouteTabsProps) => {
  // ** global state **
  const [hash, setHash] = useHash();
  const { mainScrollAreaRef, closeNavbar } = useAppShellStore();
  const isMobile = useMatches({
    base: true,
    sm: false,
  });

  // ** local state ** //

  // ** local vars ** //

  // ** handlers ** //
  const handleScroll = (value: string | null) => {
    setHash(value || '');
    value &&
      mainScrollAreaRef.current?.querySelector('#'.concat(value))?.scrollIntoView({
        behavior: 'smooth',
      });
  };

  return (
    <Tabs {...props} value={isMobile ? '' : removeHashtag(hash)} onChange={handleScroll}>
      <Tabs.List {...listProps}>
        {ROUTES.map(({ value, label, leftSection }) => (
          <Tabs.Tab
            {...tabProps}
            onClick={() => {
              closeNavbar();
            }}
            key={value}
            value={value}
            leftSection={leftSection}
            style={{
              borderBottomWidth: '2px',
              transform: 'translateY(1px)',
              color: 'var(--mantine-primary-color-6)',
              fontWeight: 500,
              fontSize: 'var(--mantine-font-size-lg)',
            }}
          >
            {label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  );
};

function removeHashtag(value: string) {
  return value.replace('#', '');
}
