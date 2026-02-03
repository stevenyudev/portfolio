import type { IImageAttr } from '@/models/imageAttr.model';
import { skillLogos } from '@/models/skillLogos.model';

interface ISkill {
  key: string;
  title: string;
  specificSkills: ISpecificSkill[];
}

export interface ISpecificSkill {
  key: string;
  skill: SpecificSkillTitles;
  level: number;
  logo: IImageAttr;
}

export type SpecificSkillTitles =
  | '.Net'
  | 'Astro.js'
  | 'AWS'
  | 'Azure'
  | 'Azure DevOps'
  | 'Big Data'
  | 'C#'
  | 'CI/CD Pipelines'
  | 'Cross Browser Compatibility'
  | 'CSS3'
  | 'Directus'
  | 'Entity Framework'
  | 'Gatsby.js'
  | 'Git'
  | 'GitHub/GitHub Actions'
  | 'GSAP'
  | 'HTML5'
  | 'Java'
  | 'JavaScript'
  | 'Lighthouse'
  | 'MUI'
  | 'MySQL'
  | 'Next.js'
  | 'PHP'
  | 'React'
  | 'REST APIs'
  | 'SEO'
  | 'Shadcn'
  | 'SQL'
  | 'Spring Boot'
  | 'Structured Data'
  | 'Tailwind'
  | 'TanStack Start'
  | 'TypeScript'
  | 'Visual Basic'
  | 'Visual Studio'
  | 'VS Code'
  | 'WordPress'
  | 'Vue'
  | 'Nuxt'
  | 'TailwindCSS'
  | 'TypeScript'
  | 'Firebase'
  | 'Fabric.js'
  | 'Node/Express';

export const skills: ISkill[] = [
  {
    key: 'front-end-development',
    title: 'Front-End Development',
    specificSkills: [
      {
        key: 'react',
        skill: 'React',
        level: 85,
        logo: skillLogos.react,
      },
      {
        key: 'typescript',
        skill: 'TypeScript',
        level: 90,
        logo: skillLogos.typescript,
      },
      {
        key: 'html',
        skill: 'HTML5',
        level: 100,
        logo: skillLogos.html,
      },
      {
        key: 'css',
        skill: 'CSS3',
        level: 100,
        logo: skillLogos.css,
      },
      {
        key: 'javascript',
        skill: 'JavaScript',
        level: 100,
        logo: skillLogos.js,
      },
      {
        key: 'next-js',
        skill: 'Next.js',
        level: 50,
        logo: skillLogos.nextJs,
      },
      {
        key: 'tailwind',
        skill: 'Tailwind',
        level: 80,
        logo: skillLogos.tailwind,
      },
      {
        key: 'gsap',
        skill: 'GSAP',
        level: 25,
        logo: skillLogos.gsap,
      },
      {
        key: 'astro',
        skill: 'Astro.js',
        level: 50,
        logo: skillLogos.astro,
      },
      {
        key: 'gatsby',
        skill: 'Gatsby.js',
        level: 40,
        logo: skillLogos.gatsby,
      },
      {
        key: 'mui',
        skill: 'MUI',
        level: 75,
        logo: skillLogos.mui,
      },
      {
        key: 'shadcn',
        skill: 'Shadcn',
        level: 70,
        logo: skillLogos.shadcn,
      },
      {
        key: 'tanstack',
        skill: 'TanStack Start',
        level: 60,
        logo: skillLogos.tanstack,
      },
      {
        key: 'cross-browser',
        skill: 'Cross Browser Compatibility',
        level: 85,
        logo: skillLogos.crossBrowser,
      },
      {
        key: 'lighthouse',
        skill: 'Lighthouse',
        level: 70,
        logo: skillLogos.lighthouse,
      },
      {
        key: 'seo',
        skill: 'SEO',
        level: 75,
        logo: skillLogos.seo,
      },
      {
        key: 'structured-data',
        skill: 'Structured Data',
        level: 70,
        logo: skillLogos.structuredData,
      },
    ],
  },
  {
    key: 'back-end-development',
    title: 'Back-End Development',
    specificSkills: [
      {
        key: 'csharp',
        skill: 'C#',
        level: 80,
        logo: skillLogos.cSharp,
      },
      {
        key: 'sql',
        skill: 'SQL',
        level: 60,
        logo: skillLogos.sql,
      },
      {
        key: 'php',
        skill: 'PHP',
        level: 70,
        logo: skillLogos.php,
      },
      {
        key: 'mysql',
        skill: 'MySQL',
        level: 60,
        logo: skillLogos.mysql,
      },
      {
        key: 'dotnet',
        skill: '.Net',
        level: 65,
        logo: skillLogos.dotNet,
      },
      {
        key: 'entity-framework',
        skill: 'Entity Framework',
        level: 55,
        logo: skillLogos.entityFramework,
      },
      {
        key: 'directus',
        skill: 'Directus',
        level: 50,
        logo: skillLogos.directus,
      },
      {
        key: 'rest',
        skill: 'REST APIs',
        level: 80,
        logo: skillLogos.rest,
      },
      {
        key: 'wordpress',
        skill: 'WordPress',
        level: 65,
        logo: skillLogos.wordpress,
      },
    ],
  },
  {
    key: 'devops-and-tools',
    title: 'DevOps & Tools',
    specificSkills: [
      {
        key: 'git',
        skill: 'Git',
        level: 80,
        logo: skillLogos.git,
      },
      {
        key: 'github',
        skill: 'GitHub/GitHub Actions',
        level: 80,
        logo: skillLogos.github,
      },
      {
        key: 'vs-code',
        skill: 'VS Code',
        level: 100,
        logo: skillLogos.vsCode,
      },
      {
        key: 'visual-studio',
        skill: 'Visual Studio',
        level: 100,
        logo: skillLogos.visualStudio,
      },
      {
        key: 'azure',
        skill: 'Azure',
        level: 50,
        logo: skillLogos.azure,
      },
      {
        key: 'devops',
        skill: 'Azure DevOps',
        level: 55,
        logo: skillLogos.devops,
      },
      {
        key: 'cicd-pipelines',
        skill: 'CI/CD Pipelines',
        level: 60,
        logo: skillLogos.cicdPipelines,
      },
      {
        key: 'visual-basic',
        skill: 'Visual Basic',
        level: 70,
        logo: skillLogos.visualBasic,
      },
    ],
  },
];
