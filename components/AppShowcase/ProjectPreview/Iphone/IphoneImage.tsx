import { ReactNode } from 'react';
import Image from 'next/image';
import { Box, Center, Image as MantineImage } from '@mantine/core';
import img from '@/public/iphone.svg';
import classes from './IphoneImage.module.css';

export const IphoneImage = ({ children }: { children: ReactNode }) => (
  <Center w="380px" h="730px" style={{ overflow: 'hidden', position: 'relative' }}>
    <MantineImage
      component={Image}
      alt="Iphone Image"
      src={img}
      className={classes.translate}
      style={{}}
      w={872}
    />
    <Box
      className={classes.screenOverlay}
      style={{
        backgroundColor: 'var(--mantine-color-default)',
        overflow: 'hidden',
        position: 'absolute',
        top: '112px',
        left: '18px',
        bottom: '80px',
        right: '12px',
      }}
    >
      <iframe
        title="mobile-view"
        id="mobile-view"
        width="100%"
        height="100%"
        src="https://interactiv.vercel.app/"
      >
        {children}
      </iframe>
    </Box>
  </Center>
);
