import { IconDeviceImac, IconDeviceIpad, IconDeviceMobile } from '@tabler/icons-react';
import {
  Center,
  SegmentedControl,
  SegmentedControlProps,
  Tooltip,
  VisuallyHidden,
} from '@mantine/core';

export const DisplaySelector = ({ value, onChange }: Omit<SegmentedControlProps, 'data'>) => {
  // ** global state **

  // ** local state ** //

  // ** local vars ** //
  const data = (
    [
      ['Desktop', <IconDeviceImac />],
      ['Tablet', <IconDeviceIpad />],
      ['Mobile', <IconDeviceMobile />],
    ] as const
  ).map(([label, icon]) => ({
    value: label,
    label: (
      <Tooltip label={label}>
        <Center>
          {icon}
          <VisuallyHidden>{label}</VisuallyHidden>
        </Center>
      </Tooltip>
    ),
  }));

  // ** handlers ** //
  return <SegmentedControl data={data} onChange={onChange} value={value} />;
};
