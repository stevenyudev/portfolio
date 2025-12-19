import styles from '@/styles/navbar/hamburger.module.css';
import { useNavOpenStore } from '@/store/useNavOpenStore';

/**
 * Hamburger component
 *
 * A hamburger menu button that toggles the navbar open or closed state.
 *
 * @returns {JSX.Element} A JSX element representing the hamburger menu button.
 */
const Hamburger = () => {
  // Access the open state and toggle function from the store
  const { open, toggle } = useNavOpenStore();

  return (
    <div
      className={`flex flex-center ${styles['hamburger']} ${open ? styles['open'] : ''}`}
    >
      <button onClick={toggle} aria-label="Toggle navigation">
        <span></span>
      </button>
    </div>
  );
};

export default Hamburger;
