import type { IImageAttr } from '@/models/imageAttr.model';
import type { ReactNode } from 'react';
import type { SpecificSkillTitles } from '@/models/skills.model';
import { thumbnails } from '@/models/projectThumbnails.model';

export interface IProject {
  key: string;
  thumbnail: IImageAttr;
  title: string;
  excerpt: ReactNode;
  githubLink?: string;
  siteLink: string;
  skills: SpecificSkillTitles[];
}

export const projects: IProject[] = [
  {
    key: 'telus',
    title: 'TELUS',
    excerpt: (
      <>
        <p>
          A React rendering engine that takes content from Contentful CMS and
          renders dynamic webpages. Having layout information and web content
          retrieved from Contentful enables publishing flexible, dynamic web
          pages without the code deployment.
        </p>
      </>
    ),
    githubLink: '',
    siteLink: 'https://www.telus.com/en/',
    skills: [
      'React',
      'TypeScript',
      'Gatsby.js',
      'GitHub/GitHub Actions',
      'Azure',
      'CI/CD Pipelines',
      'Directus',
      '.Net',
      'SEO',
    ],
    thumbnail: thumbnails.telus,
  },
  {
    key: 'omers',
    title: 'Omers',
    excerpt: (
      <>
        <p>
          A React-based Next.js application taking Contentful data organized in
          rows and dynamically rendering it onto the webpage. The payload is
          cached per page to improve performance. The ability to publish static
          content outside of release cycles proved extremely valuable during
          COVID-19 times, where information needs to be shared quickly. A
          two-week deployment cycle would hurt business values.
        </p>
      </>
    ),
    githubLink: '',
    siteLink: 'https://www.omers.com/',
    skills: ['TanStack Start', 'React', 'TypeScript', 'Tailwind', 'Shadcn'],
    thumbnail: thumbnails.omers,
  },
  {
    key: 'care-club',
    title: 'Care Club',
    excerpt: (
      <>
        <p>
          <b>
            Full Stack Practice website (Coffee shop website using React, React
            Router and MongoDB with CRUD)
          </b>
        </p>
        <p>
          Coffee Emporium is a full-stack project aimed at managing a coffee
          inventory. It allows users to add new coffee items, update existing
          items, remove items from the database, and display the inventory in
          the user interface.{' '}
        </p>
      </>
    ),
    githubLink: '',
    siteLink: 'https://react-coffee-shop.vercel.app',
    skills: [
      'React',
      'TypeScript',
      'Next.js',
      'MUI',
      'CI/CD Pipelines',
      '.Net',
    ],
    thumbnail: thumbnails.coffeeShop,
  },
];
