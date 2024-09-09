import { Carousel } from '@mantine/carousel';
import { useMatches } from '@mantine/core';
import { PROJECTS } from '@/constants';
import { ProjectCard } from './ProjectCard';
import { TECH_STACK_MAP } from './TechStack';

export type TechStackType = (keyof typeof TECH_STACK_MAP)[];

export const ProjectCarousel = ({
  handleProjectSelect,
  selectedProject,
}: {
  handleProjectSelect: (title: string) => void;
  selectedProject: string;
}) => {
  // ** global state ** //
  const isMobile = useMatches({ base: true, sm: false });
  // ** local state ** //

  // ** local vars ** //
  const slides = PROJECTS.map((item) => (
    <Carousel.Slide key={item.title}>
      <ProjectCard
        {...item}
        handleProjectSelect={handleProjectSelect}
        selectedProject={selectedProject}
      />
      {/* <div style={{ border: '2px solid red', height: '280px', width: '100%' }} /> */}
    </Carousel.Slide>
  ));
  // TODO add tech stack
  // ** handlers ** //
  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%' }}
      slideGap={{ base: 'xl', sm: 'sm' }}
      align="start"
      height="280px"
      w="100%"
      slidesToScroll={isMobile ? 1 : 2}
      styles={{
        control: {
          zIndex: 4,
          backgroundColor: 'var(--mantine-color-gray-1)',
          color: 'var(--mantine-color-dark-9)',
        },
      }}
      loop
      withIndicators
    >
      {slides}
    </Carousel>
  );
};
