import GlitchBraces from '@/assets/portfolio-logo-glitching-braces.webp';
import styles from '@/styles/navbar/logo.module.css';

/**
 * A logo component for the portfolio.
 * It displays a glitch effect curly braces logo with the text 'CC' in the center.
 * @returns {JSX.Element} A JSX element representing the logo component.
 */
const Logo = () => {
  return (
    <div className={styles['logo']}>
      <img
        src={GlitchBraces}
        alt="curly braces in a blue to violet gradient with a glitch effect"
        width={80}
        height={80}
      />
      <span className={`position-center ${styles['logo-text']}`}>CC</span>
    </div>
  );
};

export default Logo;
