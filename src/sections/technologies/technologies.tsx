import { Container } from "react-bootstrap";
import styles from "./styles.module.css";
import { RiJavascriptLine, RiHtml5Fill, RiReactjsFill } from "react-icons/ri";
import { IoLogoFirebase, IoLogoCss3, IoLogoNodejs } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiCsharp, SiMysql, SiSupabase } from "react-icons/si";
import { Technology } from "./components/technology";

import { IconType } from "react-icons";

export type TechnologyType = {
  name: string;
  Icon: IconType;
  onHover: string;
};

const technologies: TechnologyType[] = [
  { name: "HTML", Icon: RiHtml5Fill, onHover: "#E44D26" },
  { name: "JavaScript", Icon: RiJavascriptLine, onHover: "#F7DF1E" },
  { name: "TypeScript", Icon: BiLogoTypescript, onHover: "#007ACC" },
  { name: "CSS", Icon: IoLogoCss3, onHover: "#264DE4" },
  { name: "React", Icon: RiReactjsFill, onHover: "#61DAFB" },
  { name: "React Native", Icon: RiReactjsFill, onHover: "#61DAFB" },
  { name: "Node", Icon: IoLogoNodejs, onHover: "#689F63" },
  { name: "C#", Icon: SiCsharp, onHover: "#9A4F96" },
  { name: "Firebase", Icon: IoLogoFirebase, onHover: "#FCCA3F" },
  { name: "MySQL", Icon: SiMysql, onHover: "#5382A1" },
  { name: "Supabase", Icon: SiSupabase, onHover: "#3ECF8E" },
];

export const Technologies = () => {
  return (
    <main className={styles.main} id="technologies">
      <Container>
        <div className={styles.info}>
          <h1 className={styles.title}>USANDO AS PRINCIPAIS</h1>
          <h1 className={styles.titleWithBackground}>TECNOLOGIAS</h1>
          <h1 className={styles.title}>DO MERCADO</h1>
        </div>
        <div className={styles.techList}>
          {technologies.map((technology, index) => (
            <Technology Technology={technology} key={index} />
          ))}
        </div>
      </Container>
    </main>
  );
};
