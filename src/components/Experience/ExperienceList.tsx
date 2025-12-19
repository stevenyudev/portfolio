import Experience from '@/components/Experience/Experience';
import { experience } from '@/models/experience.model';
import styles from '@/styles/experience/experience-list.module.css';

/**
 * A component that displays a list of experiences.
 *
 * @returns {JSX.Element} - A JSX element representing the experience list section
 */
const ExperienceList = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="flex">
        <div className={`flex flex-column ${styles['experience-list-items']}`}>
          {/* 
            Map over the experience array and render an 
            Experience component for each experience 
          */}
          {experience.map((xp) => (
            <div
              key={`experience_${xp.key}`}
              className={`flex flex-row ${styles['experience-list-item']}`}
            >
              {/* 
                Render a bullet for each experience 
                so a timeline appears on the left 
              */}
              <div className={styles['experience-list-item-bullet']}></div>

              {/* The Experience component */}
              <Experience experience={xp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceList;
