import Image from 'next/image';
import { Box, Center, Image as MantineImage } from '@mantine/core';
import img from '@/public/tablet.svg';

export const Tablet = () => {
  // ** global state **

  // ** local state ** //

  // ** local vars ** //

  // ** handlers ** //
  return <MantineImage component={Image} alt="Tablet Image" src={img} />;
};
