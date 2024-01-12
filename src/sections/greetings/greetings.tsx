import imgLucas from "/lucas_img.png";
import { MdOutlineEmail, MdOutlineCloudDownload } from "react-icons/md";
import styles from "./styles.module.css";
import { Container } from "react-bootstrap";
import video from "/video.webm";

export const Greetings = () => {
  return (
    <main>
      <div className={styles.video}>
        <div className={styles.background}></div>
        <video autoPlay loop muted>
          <source src={video} type="video/webm" />
        </video>
      </div>

      <Container className={styles.mainContent}>
        <div className={styles.userInfo}>
          <h2>Prazer, me chamo</h2>
          <h1 className={styles.userName}>{"<Lucas Pizol />"}</h1>
          <div className={styles.buttons}>
            <a href="#contact">
              <MdOutlineEmail size={18} />
              Contato
            </a>
            <a
              href="/Currículo_Lucas Pizol Ferreira_Desenvolvedor.pdf"
              download
            >
              <MdOutlineCloudDownload size={18} />
              Baixar CV
            </a>
          </div>
        </div>
        <img loading="lazy" src={imgLucas} />
      </Container>
    </main>
  );
};
