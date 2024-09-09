import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Avatar, Group, Tooltip } from '@mantine/core';
import { type TechStackType } from './ProjectCarousel';

export const TECH_STACK_MAP: Record<
  string,
  {
    icon: string;
    label: string;
    source: string;
  }
> = {
  nextjs: {
    icon: 'teenyicons:nextjs-outline',
    label: 'Next.js',
    source: 'https://nextjs.org/',
  },
  react: {
    icon: 'logos:react',
    label: 'React',
    source: 'https://react.dev/',
  },
  typescript: {
    icon: 'skill-icons:typescript',
    label: 'TypeScript',
    source: 'https://www.typescriptlang.org/',
  },
  tailwind: {
    icon: 'logos:tailwindcss-icon',
    label: 'Tailwind CSS',
    source: 'https://tailwindcss.com/',
  },
  html: {
    icon: 'devicon:html5',
    label: 'HTML',
    source: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  css: {
    icon: 'devicon:css3',
    label: 'CSS',
    source: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  javascript: {
    icon: 'skill-icons:javascript',
    label: 'JavaScript',
    source: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  discordjs: {
    icon: 'devicon:discordjs',
    label: 'Discord.js',
    source: 'https://discord.js.org/',
  },
} as const;

export const TechStack = ({ techStack }: { techStack: TechStackType }) => (
  <Group justify="flex-end" style={{ alignSelf: 'flex-start' }}>
    <Tooltip.Group>
      <Avatar.Group spacing="xs">
        {techStack.map((id) => (
          <TechStackItem id={id} key={id} />
        ))}
      </Avatar.Group>
    </Tooltip.Group>
  </Group>
);

interface ITechStackItem {
  id: string;
}

export const TechStackItem = ({ id }: ITechStackItem) => {
  const { icon, label, source } = TECH_STACK_MAP[id];
  return (
    <Tooltip label={label} withArrow>
      <Link href={source} target="_blank">
        <Avatar>
          <Icon icon={icon} height="1.5rem" />
        </Avatar>
      </Link>
    </Tooltip>
  );
};
