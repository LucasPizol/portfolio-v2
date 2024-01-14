import imgLucas from "/lucas_img.png";
import { MdOutlineEmail, MdOutlineCloudDownload } from "react-icons/md";
import styles from "./styles.module.css";
import { Container } from "react-bootstrap";
import video from "/video.webm";
import AOS from "aos";
AOS.init();

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
        <div data-aos="fade-left" data-aos-duration="300" className={styles.userInfo}>
          <h2 data-aos="fade-up" data-aos-duration="300">Prazer, me chamo</h2>
          <h1 data-aos="fade-up" className={styles.userName} data-aos-delay="300">
            {"<Lucas Pizol />"}
          </h1>
          <div className={styles.buttons}>
            <a href="#contact" data-aos="fade-up" data-aos-delay="400">
              <MdOutlineEmail size={18} />
              Contato
            </a>
            <a
              href="/Currículo_Lucas Pizol Ferreira_Desenvolvedor.pdf"
              download
              data-aos="fade-up" data-aos-delay="500"
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
