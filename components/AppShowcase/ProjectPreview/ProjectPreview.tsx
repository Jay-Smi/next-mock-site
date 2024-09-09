import { forwardRef } from 'react';
import { Box, Paper, useMantineTheme } from '@mantine/core';
import { useMainContentHeight } from '@/components/layout/hooks/useMainContentHeight';
import { PROJECTS } from '@/constants';

export const ProjectPreview = forwardRef<HTMLIFrameElement, { selectedProject: string }>(
  ({ selectedProject }, ref) => {
    // ** global state **
    const mainHeight = useMainContentHeight();
    const theme = useMantineTheme();
    // ** local state ** //

    // ** local vars ** //
    const project = PROJECTS.find((proj) => proj.title === selectedProject);

    // ** handlers ** //
    return (
      <Paper
        id="project-preview"
        style={{
          height: mainHeight,
          width: '100vw',
        }}
        p="lg"
      >
        <Box
          h="100%"
          w="100%"
          style={{
            borderRadius: theme.radius.md,
            overflow: 'hidden',
            border: '3px solid var(--mantine-color-default-border)',
          }}
        >
          <iframe
            ref={ref}
            src={project?.source || ''}
            title={project?.title}
            style={{ height: '100%', width: '100%' }}
          />
        </Box>
      </Paper>
    );
  }
);
