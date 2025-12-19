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
            I am a hardworking and innovative front-end developer with over 6 years experience
            creating web applications that not only look good, but also load
            quickly, are accessible, and are developed with SEO in mind.
          </p>
          <p>
            I&apos;ve developed this portfolio to showcase some of the
            achievements I have made over the years so feel free to have a look
            around and reach out if my work catches your eye.
          </p>
          <p>
            I&apos;m currently looking for a new position so feel free to reach
            out and we can discuss any opportunities in which I may be of
            service.
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
