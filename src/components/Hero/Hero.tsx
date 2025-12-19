import SkillsBlob from '@/components/Hero/SkillsBlob';
import styles from '@/styles/hero/hero.module.css';

/**
 * The Hero component is the top level component on the home page.
 * It renders a section element with a heading and a subheading.
 * The section element also contains a SkillsBlob component.
 * The Hero component is responsible for rendering the main content of the home page.
 * @returns {JSX.Element} - A section element containing the hero content.
 */
const Hero = () => {
  return (
    <section id="home" className={`flex flex-column-to-row ${styles['hero']}`}>
      <div className={styles['hero-text']}>
        <h1>Hello, I'm Steven</h1>
        <h2>Your new Full-Stack Web developer</h2>
      </div>
      <SkillsBlob />
    </section>
  );
};

export default Hero;
