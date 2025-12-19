import SocialLinks from '@/components/SocialLinks/SocialLinks';
import styles from '@/styles/footer.module.css';

/**
 * Footer component
 *
 * This component renders the footer of the page, including
 * a SocialLinks component and a copyright notice.
 *
 * @returns {JSX.Element} A JSX element representing the footer.
 */
const Footer = () => {
  const today = new Date();
  return (
    <footer
      className={`flex flex-column flex-between-center ${styles['footer']}`}
    >
      <SocialLinks />
      <p>Designed and built by Steven Yu &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
