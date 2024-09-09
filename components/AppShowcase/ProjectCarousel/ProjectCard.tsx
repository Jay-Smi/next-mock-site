import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import {
  ActionIcon,
  Box,
  Button,
  Image as MantineImage,
  Overlay,
  Paper,
  Text,
  Title,
} from '@mantine/core';
import { TechStack } from './TechStack';
import classes from './ProjectCarousel.module.css';

interface CardProps {
  image: StaticImageData;
  title: string;
  category: string;
  techStack: string[];
  source: string;
  handleProjectSelect: (title: string) => void;
  selectedProject: string;
}

export function ProjectCard({
  image,
  title,
  category,
  techStack,
  source,
  handleProjectSelect,
  selectedProject,
}: CardProps) {
  const isSelected = selectedProject === title;
  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card}>
      <Box className={classes.content}>
        <div className={classes.info}>
          <Text className={classes.category} size="xs">
            {category}
          </Text>
          <Title order={3} className={classes.title}>
            {title}
          </Title>
        </div>

        <Button
          variant={isSelected ? 'filled' : 'white'}
          color={isSelected ? 'var(--mantine-primary-color-filled)' : 'dark'}
          onClick={() => (isSelected ? handleProjectSelect('') : handleProjectSelect(title))}
          className={classes.button}
        >
          Preview Project
        </Button>

        <Box className={classes.stack} visibleFrom="xs">
          <TechStack techStack={techStack} />
        </Box>

        <Link href={source} target="_blank" className={classes.link}>
          <ActionIcon variant="default" radius="xl" size="lg">
            <Icon icon="tabler:external-link" />
          </ActionIcon>
        </Link>
      </Box>

      <Overlay zIndex={2} />

      <MantineImage
        component={Image}
        alt={`${title} Image`}
        src={image}
        h={280}
        className={classes.backgroundImage}
        radius="md"
      />
    </Paper>
  );
}
