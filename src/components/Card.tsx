import type { ReactNode } from 'react';
import styles from '@/styles/card.module.css';

/**
 * A reusable card component that can be used to wrap
 * any content with a card-like design.
 *
 * @param {ReactNode} children - The content to be wrapped
 * inside the card.
 * @param {string} [className] - Additional CSS classes to be
 * applied to the card.
 * @returns {JSX.Element} - The card component with the
 * provided content.
 */
const Card = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`${styles['card']} ${className}`}>{children}</div>;
};

export default Card;
