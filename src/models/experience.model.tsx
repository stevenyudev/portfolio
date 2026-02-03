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

const bulletStyle = {};

export const experience: IExperience[] = [
  {
    key: 'Hong Kong Synergy Software Company Limited',
    company: 'Hong Kong Synergy Software Company Limited',
    title: 'Senior Web Full Stack Engineer',
    dateStart: new Date(2023, 4, 1), // May 2023
    dateEnd: new Date(2025, 12, 31), // Dec 2025
    bullets: [
      <div style={bulletStyle} key="bullet1">
        Designed and implemented{' '}
        <strong className={styles['strong-tech']}>React</strong> /{' '}
        <strong className={styles['strong-tech']}>Next.js</strong> dashboards for portfolio insights and automated reporting,
        improving report generation speed by{' '}
        <strong className={styles['strong-figure']}>40%</strong>.
      </div>,

      <div style={bulletStyle} key="bullet2">
        Built{' '}
        <strong className={styles['strong-tech']}>Python-based microservices</strong> for data ingestion, normalization,
        and reconciliation from multiple financial custodians.
      </div>,

      <div style={bulletStyle} key="bullet3">
        Developed{' '}
        <strong className={styles['strong-tech']}>RESTful APIs</strong> and{' '}
        <strong className={styles['strong-tech']}>GraphQL</strong> endpoints using{' '}
        <strong className={styles['strong-tech']}>Node.js</strong> and{' '}
        <strong className={styles['strong-tech']}>FastAPI</strong> to support secure web portals and internal workflows.
      </div>,

      <div style={bulletStyle} key="bullet4">
        Integrated{' '}
        <strong className={styles['strong-tech']}>AI models</strong> for trade analysis and portfolio recommendations,
        enabling semi-automated investment insights.
      </div>,

      <div style={bulletStyle} key="bullet5">
        Engineered{' '}
        <strong className={styles['strong-tech']}>ETL pipelines</strong> handling PDF, Excel, and API-based financial data,
        reducing manual data preparation by{' '}
        <strong className={styles['strong-figure']}>60%</strong>.
      </div>,

      <div style={bulletStyle} key="bullet6">
        Implemented{' '}
        <strong className={styles['strong-tech']}>RBAC</strong>, secure token authentication, and encrypted storage
        to protect sensitive investment data and meet fintech compliance standards.
      </div>,

      <div style={bulletStyle} key="bullet7">
        Optimized cloud deployment using{' '}
        <strong className={styles['strong-tech']}>AWS Lambda</strong> and{' '}
        <strong className={styles['strong-tech']}>Docker</strong>, ensuring scalable and fault-tolerant infrastructure.
      </div>,

      <div style={bulletStyle} key="bullet8">
        Led a team of{' '}
        <strong className={styles['strong-figure']}>5 engineers</strong> across full-stack feature development,
        CI/CD setup, and cross-team code reviews.
      </div>,
    ],
  },

  {
    key: 'HCLTech',
    company: 'HCLTech',
    title: 'Senior Full Stack AI-Driven Solution Developer',
    dateStart: new Date(2021, 2, 1), // May 2021
    dateEnd: new Date(2023, 3, 30), // Apr 2023
    bullets: [
      <div style={bulletStyle} key="bullet1">
        Developed{' '}
        <strong className={styles['strong-tech']}>React-based client portals</strong> for investment dashboards,
        featuring dynamic data visualization and interactive charts.
      </div>,

      <div style={bulletStyle} key="bullet2">
        Designed and delivered scalable full-stack applications using{' '}
        <strong className={styles['strong-tech']}>React</strong>,{' '}
        <strong className={styles['strong-tech']}>Node.js</strong>, and{' '}
        <strong className={styles['strong-tech']}>Python</strong> in high-traffic production environments.
      </div>,

      <div style={bulletStyle} key="bullet3">
        Implemented{' '}
        <strong className={styles['strong-tech']}>SEO</strong>, performance optimization, and accessibility best practices,
        improving page load speed and search visibility.
      </div>,

      <div style={bulletStyle} key="bullet4">
        Built backend services with{' '}
        <strong className={styles['strong-tech']}>Node.js</strong> and{' '}
        <strong className={styles['strong-tech']}>Python</strong> to automate trade ticket creation and pre-trade checks
        across multiple custodians.
      </div>,

      <div style={bulletStyle} key="bullet5">
        Designed data reconciliation workflows consolidating multi-source investment data,
        reducing errors by{' '}
        <strong className={styles['strong-figure']}>35%</strong>.
      </div>,

      <div style={bulletStyle} key="bullet6">
        Integrated{' '}
        <strong className={styles['strong-tech']}>LLM-based AI assistants</strong> for report generation and portfolio insights,
        significantly improving analyst efficiency.
      </div>,

      <div style={bulletStyle} key="bullet7">
        Designed and maintained{' '}
        <strong className={styles['strong-tech']}>PostgreSQL</strong> and{' '}
        <strong className={styles['strong-tech']}>MongoDB</strong> databases to store reconciled financial data and AI outputs.
      </div>,

      <div style={bulletStyle} key="bullet8">
        Implemented{' '}
        <strong className={styles['strong-tech']}>CI/CD pipelines</strong> using{' '}
        <strong className={styles['strong-tech']}>GitHub Actions</strong>, automating testing, deployment, and monitoring.
      </div>,

      <div style={bulletStyle} key="bullet9">
        Optimized ETL workflows and asynchronous API processing to handle high-volume trade and position data efficiently.
      </div>,

      <div style={bulletStyle} key="bullet10">
        Collaborated with security teams to enforce secure coding standards and compliance for fintech applications.
      </div>,
    ],
  },
  {
    key: 'ICO Limited',
    company: 'ICO Limited',
    title: 'Mid-Level Full Stack Developer',
    dateStart: new Date(2018, 4, 18), // Apr 2018
    dateEnd: new Date(2021, 1, 31), // Apr 2021
    bullets: [
      <div style={bulletStyle} key="bullet1">
        Built full-stack web applications using{' '}
        <strong className={styles['strong-tech']}>React</strong>,{' '}
        <strong className={styles['strong-tech']}>Vue</strong>,{' '}
        <strong className={styles['strong-tech']}>Node.js</strong>, and{' '}
        <strong className={styles['strong-tech']}>Express</strong> for enterprise clients.
      </div>,

      <div style={bulletStyle} key="bullet2">
        Engineered backend services for a large distributed banking system,
        implementing complex routing and error-handling logic.
      </div>,

      <div style={bulletStyle} key="bullet3">
        Designed responsive UI components with strong cross-browser compatibility and usability.
      </div>,

      <div style={bulletStyle} key="bullet4">
        Debugged and refactored a corporate social network,
        improving scalability and optimizing performance by{' '}
        <strong className={styles['strong-figure']}>10%</strong>.
      </div>,

      <div style={bulletStyle} key="bullet5">
        Developed{' '}
        <strong className={styles['strong-tech']}>Python services</strong> for data processing, AI integration,
        and automated reporting workflows.
      </div>,

      <div style={bulletStyle} key="bullet6">
        Created interactive dashboards and secure client portals for financial operations teams.
      </div>,

      <div style={bulletStyle} key="bullet7">
        Managed{' '}
        <strong className={styles['strong-tech']}>SQL</strong> and{' '}
        <strong className={styles['strong-tech']}>MongoDB</strong> databases,
        ensuring data integrity and optimized query performance.
      </div>,

      <div style={bulletStyle} key="bullet8">
        Automated routine workflows, reducing manual intervention for{' '}
        <strong className={styles['strong-figure']}>30+ internal users</strong>.
      </div>,

      <div style={bulletStyle} key="bullet9">
        Implemented{' '}
        <strong className={styles['strong-tech']}>Dockerized microservices</strong> and deployed applications on{' '}
        <strong className={styles['strong-tech']}>AWS</strong> and{' '}
        <strong className={styles['strong-tech']}>GCP</strong>.
      </div>,

      <div style={bulletStyle} key="bullet10">
        Supported cross-team collaboration through Git workflows, code reviews, and CI/CD automation.
      </div>,
    ],
  },
];
