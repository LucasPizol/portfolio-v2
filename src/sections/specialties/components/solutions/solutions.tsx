import notebook from "/notebook_mockup.png";
import comment from "/comment.png";
import styles from "./styles.module.css";

export const Solutions = () => {
  return (
    <article className={styles.article}>
      <img className={styles.imageNotebook} src={notebook} data-aos="fade-right" data-aos-offset="250"/>
      <div className={styles.rightDiv} data-aos="fade-left" data-aos-offset="250">
        <div className={styles.info}>
          <h1 className={styles.title}>ESPECIALISTA EM DESENVOLVER</h1>
          <h1 className={styles.titleWithBackground}>SISTEMAS</h1>
        </div>
        <img className={styles.comment} src={comment} />
      </div>
    </article>
  );
};
