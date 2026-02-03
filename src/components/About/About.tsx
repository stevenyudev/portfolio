import Profile from '@/components/About/Profile';
import { scrollToSection } from '@/utils/scrollToSection';
import styles from '@/styles/about/about.module.css';

/**
 * A component that displays information about me, including a profile
 * picture and a brief description of my experience and skills.
 *
 * @returns {JSX.Element} A JSX element representing the about
 * section.
 */
const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className={`flex flex-column-to-row ${styles['about']}`}>
        <div>
          <p>
            I am a <strong>Senior Full Stack Engineer</strong> with extensive
            experience building <strong>AI-driven web applications</strong>,
            financial data pipelines, and scalable{' '}
            <strong>SaaS platforms</strong>.
          </p>

          <p>
            My core expertise includes <strong>Python</strong> and{' '}
            <strong>JavaScript / TypeScript</strong>,{' '}
            <strong>React-based dashboards</strong>, <strong>Node.js</strong>{' '}
            and <strong>Flask</strong> backend services, and cloud deployment
            across <strong>AWS</strong> and <strong>GCP</strong>.
          </p>

          <p>
            I specialize in <strong>data integration</strong>, automation of
            investment workflows, and <strong>AI-assisted analytics</strong> for
            financial operations teams, with a strong focus on security,
            performance, and scalability in regulated environments.
          </p>

          <p>
            I have a proven track record of streamlining complex data flows,
            automating reporting, and significantly improving operational
            efficiency through well-architected full-stack and AI-powered
            solutions.
          </p>
        </div>
        <div className={`flex flex-column ${styles['about-profile']}`}>
          <Profile />
          <button onClick={() => scrollToSection('contact')}>Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default About;
