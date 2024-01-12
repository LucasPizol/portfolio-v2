import styles from "./styles.module.css";
import { Container } from "react-bootstrap";
import imgLucas from "/lucas_img.png";

export const AboutMe = () => {
  return (
    <main className={styles.main} id="about-me">
      <Container className={styles.container}>
        <img src={imgLucas} />
        <div className={styles.infoDiv}>
          <h1 className={styles.title}>E QUEM É</h1>
          <h1 className={styles.titleWithBackground}>LUCAS ?</h1>
          <p>
            Nascido em Poços de Caldas, filho de uma família incrível. Meu pai é
            técnico de informática, então desde criança estive em contato com
            computadores.
            <br /> <br />
            Meus primeiros passos na programação foram por volta de 2014, na
            plataforma de criação de jogos GameMaker.
            <br /> <br />
            Comecei a enxergar este ramo como profissão no final de 2022, e
            desde então busco uma oportunidade no mercado.
          </p>
        </div>
      </Container>
    </main>
  );
};
