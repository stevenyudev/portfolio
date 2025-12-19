import { useEffect, useState } from 'react';

import navStyles from '@/styles/navbar/navbar.module.css';
import { scrollToSection } from '@/utils/scrollToSection';
import styles from '@/styles/navbar/page-links.module.css';
import { useNavOpenStore } from '@/store/useNavOpenStore';

// Array of section IDs
// Declared here to avoid useEffect re-renders
const sections = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'contact',
];

/**
 * PageLinks component
 *
 * This component renders a list of page links, including
 * "Home", "About", "Skills", "Projects", "Experience", "Certificates", and "Contact".
 *
 * @returns {JSX.Element} A JSX element representing the page links list.
 */
const PageLinks = () => {
  const windowWidth = window.innerWidth;

  // Height of the navbar
  const navbarHeight = windowWidth < 900 ? 120 : 150;

  // State to track the active section
  const [activeSection, setActiveSection] = useState<string>('home');

  // Access the open state and toggle function from the store
  const { open, toggle } = useNavOpenStore();

  /**
   * Scrolls to the given section
   *
   * @param {string} section - The ID of the section to scroll to
   */
  const onClickHandler = (section: string) => {
    scrollToSection(section);
    // If the navigation menu is open, toggle it
    if (open) toggle();
  };

  useEffect(() => {
    let ticking = false;

    /**
     * Handles the window scroll event
     *
     * When the window is scrolled, this function is called.
     * It checks if the user is currently scrolling (i.e. the ticking flag is true),
     * and if not, it requests an animation frame to update the active section.
     *
     * The active section is updated by checking the current scroll position
     * against the top positions of each section on the page.
     * If the active section has changed, the state is updated.
     *
     * The ticking flag is then set to false to prevent re-renders.
     */
    const handleScroll = () => {
      // Check if the user is currently scrolling
      if (!ticking) {
        // Set the ticking flag to true
        ticking = true;

        window.requestAnimationFrame(() => {
          // Default the active section to "home"
          let current = 'home';

          // Get the current scroll position
          const currentScrollY = navbarHeight + window.scrollY;

          // Check if the current scroll position is greater than
          // or equal to the top position of each section
          sections.forEach((id) => {
            // Get the section element
            const section = document.getElementById(id);

            // If the element exists, check if the current scroll position
            // is greater than or equal to the top position of the section
            if (section) {
              const sectionTop = section.offsetTop;
              if (currentScrollY >= sectionTop) current = id;
            }
          });

          // If the active section has changed, update the state
          if (current !== activeSection) setActiveSection(current);

          // Set the ticking flag to false
          ticking = false;
        });
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener - clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, navbarHeight]);

  return (
    <ul className={`${navStyles['nav-link-ul']} ${styles['page-links']}`}>
      {/* Loop through the sections and display the page links */}
      {sections.map((section) => {
        const displayText = section.charAt(0).toUpperCase() + section.slice(1);
        return (
          <li key={`navbar_pagelink_${section}`}>
            <a
              href={`#${section}`}
              data-text={displayText}
              className={activeSection === section ? styles['active'] : ''}
              onClick={(e) => {
                // Prevent the default behavior of the link
                // and scroll to the section
                e.preventDefault();
                onClickHandler(section);
              }}
            >
              {displayText}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
