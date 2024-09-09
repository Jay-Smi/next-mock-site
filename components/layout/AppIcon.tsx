import Image from 'next/image';
import { Box, Image as MantineImage } from '@mantine/core';
import img from '@/public/js-logo-196.png';

export const AppIcon = () => (
  <Box style={{ borderRadius: 'var(--mantine-radius-sm)', overflow: 'hidden' }}>
    <MantineImage component={Image} alt="App Icon" src={img} h={40} w={40} />
  </Box>
);
