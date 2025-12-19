/**
 * Returns the height of the navbar in pixels, based on the
 * current window width.
 *
 * @returns {number} The height of the navbar in pixels.
 */
export const getNavbarHeight = () => {
  const windowWidth = window.innerWidth;
  const navbarHeight = windowWidth < 900 ? 120 : 150;
  return navbarHeight;
};

/**
 * Scrolls to the given section
 *
 * @param {string} section - The ID of the section to scroll to
 */
export const scrollToSection = (section: string) => {
  // Get the section element
  const sectionElem = document.getElementById(section);

  // If the element doesn't exist, return
  if (!sectionElem) return;

  // Calculate the top position of the section
  const scrollTo = sectionElem.offsetTop - getNavbarHeight();

  // Scroll to the calculated position
  window.scrollTo({
    top: scrollTo,
    behavior: 'smooth',
  });
};
