import navStyles from '@/styles/navbar/navbar.module.css';
import styles from '@/styles/navbar/social-links.module.css';

/**
 * GitHubLink component
 *
 * This component renders a single GitHub social link.
 *
 * @returns {JSX.Element} A JSX element representing the GitHub link.
 */
const GitHubLink = () => {
  return (
    <ul className={`${navStyles['nav-link-ul']} ${styles['social-links']}`}>
      <li>
        <a
          className={styles['social-link']}
          href="https://github.com/stevenyudev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles['icon']}></span>
          <span className={styles['icon-bottom']}></span>
          <span className={styles['tooltip']}>View My GitHub Profile</span>
        </a>
      </li>
    </ul>
  );
};

export default GitHubLink;
