import { StaticImageData } from 'next/image';
import battleship from '@/public/battleship.png';
import guildgenius from '@/public/guildgenius.png';
import interactiv from '@/public/interactiv.png';
import { TechStackType } from './components/AppShowcase/ProjectCarousel/ProjectCarousel';

export const PROJECTS: {
  image: StaticImageData;
  title: string;
  category: string;
  techStack: TechStackType;
  source: string;
}[] = [
  {
    image: interactiv,
    title: 'Interactiv',
    category: 'Drag and Drop App',
    techStack: ['nextjs', 'react', 'typescript', 'tailwind', 'html', 'css'],
    source: 'https://interactiv.jsmigen.dev/',
  },
  {
    image: battleship,
    title: 'Battleship',
    category: 'Game',
    techStack: ['javascript', 'html', 'css'],
    source: '//jay-smi.github.io/battleship/',
  },
  {
    image: guildgenius,
    title: 'Guild Genius',
    category: 'Member Management App',
    techStack: ['nextjs', 'typescript', 'react', 'tailwind', 'discordjs'],
    source: '//guild-genius-app.vercel.app/',
  },
];
