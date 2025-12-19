import Skill from '@/components/Skills/Skill';
import { skills } from '@/models/skills.model';

/**
 * A component that displays a list of skills and their corresponding levels
 * @returns {JSX.Element} A JSX element representing the skills section
 */
const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      {/* Loop through the main skills */}
      {skills.map((skill) => {
        // Sort the specific skills by level
        const orderedSpecificSkills = skill.specificSkills.sort(
          (a, b) => b.level - a.level,
        );

        return (
          // Display the skill and its specific skills
          <div key={`skill_${skill.title}`}>
            <h3>{skill.title}</h3>

            {/* Loop through the specific skills */}
            <div className="row">
              {orderedSpecificSkills.map((specificSkill) => (
                <Skill
                  key={`skill_${skill.key}_${specificSkill.key}`}
                  specificSkill={specificSkill}
                />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Skills;
