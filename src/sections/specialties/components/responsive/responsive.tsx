import comment from "/comment2.png";
import styles from "./styles.module.css";
import cellphone from "/cellphone_mockup.png";

export const Responsive = () => {
  return (
    <article className={styles.article}>
      <div className={styles.leftDiv} data-aos="fade-up">
        <div className={styles.info}>
          <h1 className={styles.title}>DESIGN DE TELAS</h1>
          <h1 className={styles.titleWithBackground}>RESPONSIVAS</h1>
        </div>
        <p>
          Meus aplicativos e sites são responsivos à todas as telas, ou seja,
          poderão ser utilizados por tablets, notebooks, computadores ou
          celulares sem risco de bugs no layout
        </p>
        <img className={styles.comment} src={comment} />
      </div>
      <img
        className={styles.imageCellphone}
        src={cellphone}
        data-aos="fade-up"
      />
    </article>
  );
};
