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
  | 'Azure'
  | 'Azure DevOps'
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
  | 'Structured Data'
  | 'Tailwind'
  | 'TanStack Start'
  | 'TypeScript'
  | 'Visual Basic'
  | 'Visual Studio'
  | 'VS Code'
  | 'WordPress';

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
        level: 30,
        logo: skillLogos.tailwind,
      },
      {
        key: 'gsap',
        skill: 'GSAP',
        level: 25,
        logo: skillLogos.gsap,
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
    ],
  },
];
