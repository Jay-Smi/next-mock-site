import Image from 'next/image';
import { Image as MantineImage } from '@mantine/core';
import img from '@/public/js-logo-196.png';

export const AppIcon = () => (
  <MantineImage component={Image} alt="App Icon" src={img} h={40} w={40} />
);
