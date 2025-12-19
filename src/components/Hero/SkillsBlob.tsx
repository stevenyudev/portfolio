import SkillsBlobLogos from '@/components/Hero/SkillsBlobLogos';
import styles from '@/styles/hero/skills-blob.module.css';

/**
 * A component that renders a blob shape and its contained logos.
 * The blob shape is animated and changes its shape and position on screen.
 * The logos are also animated and change their position, scale, and rotation on screen.
 * @returns A JSX element representing the SkillsBlob component.
 */
const SkillsBlob = () => {
  return (
    <div className={styles['blob-container']}>
      <div className={styles['blob']}></div>
      <SkillsBlobLogos />
    </div>
  );
};

export default SkillsBlob;
