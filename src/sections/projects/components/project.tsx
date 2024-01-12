import { ProjectType } from "../projects";
import styles from "./styles.module.css";

type Props = {
  Project: ProjectType;
};

export const Project = ({ Project }: Props) => {
  return (
    <div className={styles.carouselItem}>
      <img className={styles.image} src={Project.image} />
      <div className={styles.legend}>
        <h2>{Project.name}</h2>
        <div className={styles.repositories}>
          <p>Repositórios: </p>
          <div className={styles.repositoriesList}>
            {Project.repo.map((repo, index) => (
              <a href={repo.link} target="_blank" key={index}>
                {repo.type}
              </a>
            ))}
          </div>
        </div>

        {Project.deploy && (
          <p>
            Deploy:
            <a href={Project.deploy} target="_blank">
              Acesse
            </a>
          </p>
        )}
      </div>
    </div>
  );
};
