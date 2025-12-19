import Card from '@/components/Card';
import Chip from '@/components/Chip';
import type { IExperience } from '@/models/experience.model';
import styles from '@/styles/experience/experience.module.css';

/**
 * A component that displays a single experience entry from the
 * experience list. The component takes an IExperience object as a
 * prop and displays the company, title, duration of experience in
 * years, and a list of bullet points describing the experience.
 * @param {IExperience} experience - The experience information to be
 * displayed.
 * @returns {JSX.Element} - The rendered Experience component.
 */
const Experience = ({ experience }: { experience: IExperience }) => {
  // Calculate years of experience based on the
  // date started and ended (if applicable)
  const today = new Date();
  const dateEnd = experience.dateEnd ?? today; // If no end date, use today
  const dateStart = experience.dateStart;
  const dateDiff = dateEnd.getTime() - dateStart.getTime();
  const years = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));

  return (
    <Card className={styles['experience-card']}>
      <div className={`flex flex-column-to-row ${styles['experience-header']}`}>
        <h3>
          {experience.company} - {experience.title}
        </h3>
        <Chip text={`${years} years`} />
      </div>
      <ul className={styles['experience-list']}>
        {experience.bullets.map((bullet, i) => (
          <li key={`experience_${experience.key}_${i}`}>{bullet}</li>
        ))}
      </ul>
    </Card>
  );
};

export default Experience;
