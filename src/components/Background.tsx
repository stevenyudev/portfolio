import styles from '@/styles/background.module.css';

/**
 * Background component
 *
 * This component renders a repeating pattern of lines
 * in the background of the page. The pattern is
 * composed of vertical and horizontal lines of different
 * opacities.
 */
const Background = () => {
  // Common attributes for patterns that surround the line groups
  const patternAttr = {
    width: '800',
    height: '800',
    patternUnits: 'userSpaceOnUse',
  };

  // Common attributes for lines that make up the background
  const verticalLineAttr = {
    width: 3,
    rx: 1.5,
  };
  const horizontalLineAttr = {
    height: 6,
    rx: 3,
  };

  // Common attributes for the main rectangles that spread
  // across the page to fill the background
  const mainRectAttr = {
    width: '100%',
    height: '100%',
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      preserveAspectRatio="none"
      className={styles['background']}
    >
      <defs>
        {/* Vertical patterns */}
        <pattern
          {...patternAttr}
          id="vertical-opaque-lines"
          className={`${styles['vertical-pattern']} ${styles['vertical-opaue-pattern']}`}
        >
          <g className={styles['vertical-group']}>
            <rect
              {...verticalLineAttr}
              height={218}
              y={159}
              x={85.5}
              opacity={0.14}
            />
            <rect
              {...verticalLineAttr}
              height={146}
              y={113}
              x={584.5}
              opacity={0.16}
            />
            <rect
              {...verticalLineAttr}
              height={125}
              y={123}
              x={391.5}
              opacity={0.29}
            />
          </g>
        </pattern>
        <pattern
          {...patternAttr}
          id="vertical-lines"
          className={styles['vertical-pattern']}
        >
          <g className={styles['vertical-group']}>
            <rect
              {...verticalLineAttr}
              height={547}
              y={387.5}
              x={110.5}
              opacity={0.69}
            />
            <rect
              {...verticalLineAttr}
              height={422}
              y={169}
              x={699.5}
              opacity={0.39}
            />
            <rect
              {...verticalLineAttr}
              height={306}
              y={439}
              x={520.5}
              opacity={0.71}
            />
            <rect
              {...verticalLineAttr}
              height={368}
              y={498}
              x={350.5}
              opacity={0.43}
            />
            <rect
              {...verticalLineAttr}
              height={538}
              y={165}
              x={181.5}
              opacity={0.42}
            />
          </g>
        </pattern>

        {/* Horizontal patterns */}
        <pattern
          {...patternAttr}
          id="horizontal-opaque-lines"
          className={`${styles['horizontal-pattern']} ${styles['horizontal-opaque-pattern']}`}
        >
          <g className={styles['horizontal-group']}>
            <rect
              {...horizontalLineAttr}
              width={81}
              x={677.5}
              y={311}
              opacity={0.28}
            />
            <rect
              {...horizontalLineAttr}
              width={36}
              x={98}
              y={46}
              opacity={0.16}
            />
            <rect
              {...horizontalLineAttr}
              width={43}
              x={571.5}
              y={220}
              opacity={0.13}
            />
            <rect
              {...horizontalLineAttr}
              width={43}
              x={287.5}
              y={592}
              opacity={0.15}
            />
            <rect
              {...horizontalLineAttr}
              width={40}
              x={23}
              y={62}
              opacity={0.14}
            />
            <rect
              {...horizontalLineAttr}
              width={50}
              x={182}
              y={406}
              opacity={0.29}
            />
            <rect
              {...horizontalLineAttr}
              width={55}
              x={565.5}
              y={428}
              opacity={0.27}
            />
            <rect
              {...horizontalLineAttr}
              width={49}
              x={577.5}
              y={46}
              opacity={0.25}
            />
            <rect
              {...horizontalLineAttr}
              width={71}
              x={36.5}
              y={690}
              opacity={0.3}
            />
          </g>
        </pattern>
        <pattern
          {...patternAttr}
          id="horizontal-secondary-lines"
          className={`${styles['horizontal-pattern']} ${styles['horizontal-secondary-pattern']}`}
        >
          <g className={styles['horizontal-group']}>
            <rect
              {...horizontalLineAttr}
              width={39}
              x={20.5}
              y={174}
              opacity={0.7}
            />
            <rect
              {...horizontalLineAttr}
              width={42}
              x={40}
              y={440}
              opacity={0.57}
            />
            <rect
              {...horizontalLineAttr}
              width={48}
              x={154}
              y={311}
              opacity={0.66}
            />
            <rect
              {...horizontalLineAttr}
              width={65}
              x={239.5}
              y={232}
              opacity={0.61}
            />
            <rect
              {...horizontalLineAttr}
              width={55}
              x={291.5}
              y={480}
              opacity={0.4}
            />
            <rect
              {...horizontalLineAttr}
              width={64}
              x={326}
              y={366}
              opacity={0.51}
            />
            <rect
              {...horizontalLineAttr}
              width={42}
              x={343}
              y={661}
              opacity={0.57}
            />
            <rect
              {...horizontalLineAttr}
              width={57}
              x={411.5}
              y={521}
              opacity={0.52}
            />
            <rect
              {...horizontalLineAttr}
              width={38}
              x={551}
              y={612}
              opacity={0.6}
            />
            <rect
              {...horizontalLineAttr}
              width={55}
              x={447.5}
              y={55}
              opacity={0.58}
            />
            <rect
              {...horizontalLineAttr}
              width={49}
              x={570.5}
              y={747}
              opacity={0.59}
            />
            <rect
              {...horizontalLineAttr}
              width={44}
              x={489}
              y={677}
              opacity={0.92}
            />
            <rect
              {...horizontalLineAttr}
              width={45}
              x={705.5}
              y={42}
              opacity={0.59}
            />
            <rect
              {...horizontalLineAttr}
              width={40}
              x={739}
              y={486}
              opacity={0.97}
            />
          </g>
        </pattern>
        <pattern
          {...patternAttr}
          id="horizontal-lines"
          className={styles['horizontal-pattern']}
        >
          <g className={styles['horizontal-group']}>
            <rect
              {...horizontalLineAttr}
              width={52}
              x={26}
              y={340}
              opacity={0.95}
            />
            <rect
              {...horizontalLineAttr}
              width={56}
              x={47}
              y={539}
              opacity={0.78}
            />
            <rect
              {...horizontalLineAttr}
              width={50}
              x={74}
              y={239}
              opacity={0.96}
            />
            <rect
              {...horizontalLineAttr}
              width={72}
              x={180}
              y={724}
              opacity={0.82}
            />
            <rect
              {...horizontalLineAttr}
              width={49}
              x={384.5}
              y={747}
              opacity={0.91}
            />
            <rect
              {...horizontalLineAttr}
              width={33}
              x={183.5}
              y={30}
              opacity={0.69}
            />
            <rect
              {...horizontalLineAttr}
              width={43}
              x={532.5}
              y={531}
              opacity={0.37}
            />
            <rect
              {...horizontalLineAttr}
              width={47}
              x={650.5}
              y={518}
              opacity={0.75}
            />
          </g>
        </pattern>
      </defs>

      {/* Full screen rect that uses the repeating pattern */}
      <rect {...mainRectAttr} fill="url(#vertical-opaque-lines)" />
      <rect {...mainRectAttr} fill="url(#vertical-lines)" />
      <rect {...mainRectAttr} fill="url(#horizontal-opaque-lines)" />
      <rect {...mainRectAttr} fill="url(#horizontal-secondary-lines)" />
      <rect {...mainRectAttr} fill="url(#horizontal-lines)" />
    </svg>
  );
};

export default Background;
