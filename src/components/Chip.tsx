import styles from '@/styles/chip.module.css';

/**
 * A Chip component to display a small label.
 * @param {string} text The text to display on the chip.
 * @returns {JSX.Element} A JSX element representing the Chip component.
 */
const Chip = ({ text }: { text: string }) => {
  return <span className={styles['chip']}>{text}</span>;
};

export default Chip;
