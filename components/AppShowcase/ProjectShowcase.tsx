import { useState } from 'react';
import { Accordion, Collapse, Container, Stack } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import { useAppShellStore } from '../layout/hooks/useAppShellStore';
import { Welcome } from '../Welcome/Welcome';
import { ProjectCarousel } from './ProjectCarousel/ProjectCarousel';
import { ProjectPreview } from './ProjectPreview/ProjectPreview';

export type DisplayView = 'Desktop' | 'Tablet' | 'Mobile';

export const AppShowcase = () => {
  // ** global state ** //
  const { mainScrollAreaRef } = useAppShellStore();

  // ** local state ** //
  const [selectedProject, setSelectedProject] = useState<string>('');
  // ** local vars ** //

  // ** handlers ** //
  const handleProjectSelect = (title: string) => {
    setSelectedProject(title);
    setTimeout(
      () =>
        mainScrollAreaRef.current?.querySelector('#project-preview')?.scrollIntoView({
          behavior: 'smooth',
        }),
      200
    );
  };

  return (
    <Stack gap="xl" w="100%">
      <Container w="100%">
        <Stack gap="xl" w="100%">
          <Welcome text="Projects" id="Projects" />
          <ProjectCarousel
            handleProjectSelect={handleProjectSelect}
            selectedProject={selectedProject}
          />
        </Stack>
      </Container>
      <Collapse in={!!selectedProject}>
        <ProjectPreview selectedProject={selectedProject} />
      </Collapse>
    </Stack>
  );
};
