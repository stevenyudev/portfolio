import type { ReactNode } from 'react';
import styles from '@/styles/experience/experience.module.css';

export interface IExperience {
  key: string;
  company: string;
  title: string;
  dateStart: Date;
  dateEnd?: Date;
  bullets: ReactNode[];
}

const bulletStyle = {
  // minWidth: '420px', // set desired consistent min width
  // display: 'inline-block', // prevent bullets shrinking below this width
};

export const experience: IExperience[] = [
  {
    key: 'Hong Kong Synergy Software Company Limited',
    company: 'Hong Kong Synergy Software Company Limited',
    title: 'Senior Web Developer',
    dateStart: new Date(2023, 5, 1),
    bullets: [
      <div style={bulletStyle} key="bullet1">
        Spearheaded the redesign of the main product website, resulting in a{' '}
        <strong className={styles['strong-figure']}>40% increase in user engagement</strong>.
      </div>,

      <div style={bulletStyle} key="bullet2">
        Developed custom applications using{' '}
        <strong className={styles['strong-tech']}>React</strong> and various supporting technologies.
      </div>,

      <div style={bulletStyle} key="bullet3">
        Built interactive dashboards using{' '}
        <strong className={styles['strong-tech']}>React</strong> and{' '}
        <strong className={styles['strong-tech']}>Vue</strong>, improving user engagement by{' '}
        <strong className={styles['strong-figure']}>65%</strong>.
      </div>,

      <div style={bulletStyle} key="bullet4">
        Mentored a team of{' '}
        <strong className={styles['strong-figure']}>four junior developers</strong>, fostering a culture of technical excellence.
      </div>,
    ],
  },

  {
    key: 'HCLTech',
    company: 'HCLTech',
    title: 'Web Developer',
    dateStart: new Date(2020, 4, 1),
    dateEnd: new Date(2023, 4, 30),
    bullets: [
      <div style={bulletStyle} key="bullet1">
        Collaborated in a team of{' '}
        <strong className={styles['strong-figure']}>10 developers</strong> to build high-quality web applications using{' '}
        <strong className={styles['strong-tech']}>React.js</strong> and{' '}
        <strong className={styles['strong-tech']}>Node.js</strong>.
      </div>,

      <div style={bulletStyle} key="bullet2">
        Optimized application performance, achieving a{' '}
        <strong className={styles['strong-figure']}>30% reduction in load times</strong>.
      </div>,

      <div style={bulletStyle} key="bullet3">
        Developed advanced search functionality to help users quickly access the data they needed, improving overall usability.
      </div>,

      <div style={bulletStyle} key="bullet4">
        Rewrote a production application from{' '}
        <strong className={styles['strong-tech']}>Angular</strong> to{' '}
        <strong className={styles['strong-tech']}>React</strong>, defined the{' '}
        <strong className={styles['strong-tech']}>MVP scope</strong>, selected the{' '}
        <strong className={styles['strong-tech']}>tech stack</strong>, and set up automated testing workflows.
      </div>,

      <div style={bulletStyle} key="bullet5">
        Delivered reusable, modern{' '}
        <strong className={styles['strong-tech']}>React components</strong> following best practices, improving development efficiency and significantly accelerating feature delivery.
      </div>,

      <div style={bulletStyle} key="bullet6">
        Participated in internal developer talks, sharing insights on{' '}
        <strong className={styles['strong-tech']}>best practices</strong>,{' '}
        <strong className={styles['strong-tech']}>code style</strong>, and effective development processes.
      </div>,
    ],
  },
];
