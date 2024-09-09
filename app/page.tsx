'use client';

import { AppShowcase } from '@/components/AppShowcase/ProjectShowcase';
import { Welcome } from '../components/Welcome/Welcome';

export default function HomePage() {
  return (
    <>
      <Welcome text="About Me" id="About_Me" />

      <div style={{ height: '400px' }} />

      <Welcome gradientText="Resume" id="Resume" />

      <div style={{ height: '400px' }} />

      <AppShowcase />
    </>
  );
}
