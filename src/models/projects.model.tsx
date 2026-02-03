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
          I built this site using a modern React / Next.js frontend optimized
          for SEO, accessibility, and performance, backed by Node.js-based APIs
          and cloud-native services. The platform is deployed on AWS/GCP with
          CDN, caching, and security best practices to reliably support high
          traffic, personalization, and enterprise-scale operations.{' '}
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
    key: 'amadeus',
    title: 'Amadeus',
    excerpt: (
      <>
        <p>
          A modern travel technology platform built with a React frontend
          delivering a seamless and responsive user experience optimized for
          global users. The backend is powered by a scalable Java Spring Boot
          architecture to support mission-critical travel operations. Deployed
          on AWS/Azure cloud infrastructure, it efficiently handles massive
          traffic and real-time data processing. The platform integrates a
          robust API ecosystem and big data analytics pipelines to securely
          connect travel suppliers and partners worldwide.{' '}
        </p>
      </>
    ),
    githubLink: '',
    siteLink: 'https://amadeus.com/',
    skills: [
      'React',
      'Java',
      'Spring Boot',
      'AWS',
      'Azure',
      'REST APIs',
      'Big Data',
    ],
    thumbnail: thumbnails.amadeus,
  },
  {
    key: 'siteauditpro',
    title: 'SiteAuditPro',
    excerpt: (
      <>
        <p>
          Site Audit Pro helps over 40,000 businesses worldwide improve their
          productivity by making audits and inspections quick to carry out and
          simple to manage. Site Audit Pro makes recording issues, taking
          photos, adding assignees and sharing customisable reports easier and
          faster than ever before. Site Audit Pro will help you collate and
          share your findings on the go with customised reports to add a
          personal and professional touch whenever you need to capture and
          report important data. For example, Site Audit Pro is great for
          performing a safety inspection, snagging issues, creating a punch
          list, creating checklists, site walks, or providing a quotation.{' '}
        </p>
      </>
    ),
    githubLink: '',
    siteLink: 'https://siteauditpro.com/',
    skills: [
      'Vue',
      'Nuxt',
      'TailwindCSS',
      'TypeScript',
      'Firebase',
      'Fabric.js',
      'Node/Express',
    ],
    thumbnail: thumbnails.siteauditpro,
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
