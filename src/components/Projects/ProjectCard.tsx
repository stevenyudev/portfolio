import Card from '@/components/Card';
import Chip from '@/components/Chip';
import type { IProject } from '@/models/projects.model';
import githubLogo from '@/assets/skill-logos/github-logo.webp';
import styles from '@/styles/projects/project-card.module.css';

/**
 * A reusable card component that displays information about a project.
 * The component takes an IProject object as a prop and displays the
 * project's title, thumbnail, skills, excerpt, and links to the
 * project's repository and website.
 *
 * @param {IProject} project - The project information to be
 * displayed.
 * @returns {JSX.Element} - The project card component with the
 * provided project information.
 */
const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <Card className={`flex flex-column ${styles['project-card']}`}>
      {/* Project thumbnail and title */}
      <img
        src={project.thumbnail.src}
        alt={project.thumbnail.alt}
        width={686}
        className={styles['project-img']}
        loading="lazy"
      />
      <h3>{project.title}</h3>

      {/* Skills relating to project */}
      <div className={`flex ${styles['project-skills']}`}>
        {project.skills.map((skill) => (
          <Chip key={`projects_${project.key}_${skill}`} text={skill} />
        ))}
      </div>

      {/* Excerpt */}
      <div className={styles['project-excerpt']}>{project.excerpt}</div>

      {/* Links to project */}
      <div className={`flex flex-column-to-row ${styles['project-links']}`}>
        {/* Link to GitHub repo if provided */}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`button flex flex-center ${styles['project-link']}`}
          >
            <img
              src={githubLogo}
              alt="GitHub Logo"
              className={styles['github-img']}
              width={28}
              height={28}
              loading="lazy"
            />
            View Repository
          </a>
        )}

        {/* Link to site if provided */}
        {project.siteLink && (
          <a
            href={project.siteLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`button flex flex-center ${styles['project-link']}`}
          >
            Visit Site
          </a>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
