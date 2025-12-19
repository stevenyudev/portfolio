import type { ISpecificSkill } from '@/models/skills.model';
import styles from '@/styles/skill.module.css';

/**
 * A Skill component that displays a skill with its level and corresponding
 * level wording
 *
 * @param {Object} props - The props object
 * @param {ISpecificSkill} props.specificSkill - The specific skill object
 * @returns {JSX.Element} - The rendered Skill component
 */
const Skill = ({ specificSkill }: { specificSkill: ISpecificSkill }) => {
  // Determine what wording to used based on the skill level
  const levelWording =
    specificSkill.level < 40
      ? 'Beginner'
      : specificSkill.level >= 40 && specificSkill.level <= 60
        ? 'Intermediate'
        : 'Advanced';

  return (
    <div className={`flex flex-column flex-between-center ${styles['skill']}`}>
      {/* Logo of the skill */}
      <img
        {...specificSkill.logo}
        className={styles['skill-img']}
        loading="lazy"
        width={96}
        height={96}
      />

      {/* Name of the skill */}
      <p>{specificSkill.skill}</p>

      {/* Level of the skill */}
      <div className={styles['skill-pill']}>
        <div
          className={styles['skill-pill-fill']}
          style={{ width: `${specificSkill.level}%` }}
        ></div>
        <span>{levelWording}</span>
      </div>
    </div>
  );
};

export default Skill;
