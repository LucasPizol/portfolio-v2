import netflix from "/img_netflix_ead.png";
import rainbowPiercing from "/img_rainbow_piercing.png";
import coffeeShop from "/img_coffee_shop.png";
import pdvMoura from "/img_pdv_moura.png";
import chatbot from "/img_chatbot.png";
import styles from "./styles.module.css";
import { Project } from "./components/project";
import { Container } from "react-bootstrap";

enum RepoTypes {
  FB = "FrontEnd/Backend",
  F = "FrontEnd",
  B = "Backend",
  M = "Mobile",
}

export type ProjectType = {
  image: string;
  name: string;
  repo: {
    type: RepoTypes;
    link: string;
  }[];
  deploy?: string;
};

const projects: ProjectType[] = [
  {
    image: netflix,
    name: "Netflix EAD",
    repo: [
      { type: RepoTypes.FB, link: "https://github.com/LucasPizol/netflix" },
    ],
  },
  {
    image: rainbowPiercing,
    name: "Rainbow Piercing",
    repo: [
      {
        type: RepoTypes.F,
        link: "https://github.com/LucasPizol/rainbowpiercing",
      },
    ],
    deploy: "https://lucaspizol.github.io/rainbowpiercing/",
  },
  {
    image: coffeeShop,
    name: "Coffee Shop",
    repo: [
      {
        type: RepoTypes.F,
        link: "https://github.com/LucasPizol/Ecommerce",
      },
      {
        type: RepoTypes.B,
        link: "https://github.com/LucasPizol/Ecommerce-backend",
      },
    ],
    deploy: "https://coffee-shop-livid.vercel.app/",
  },
  {
    image: pdvMoura,
    name: "Trade Marketing",
    repo: [
      {
        type: RepoTypes.F,
        link: "https://github.com/LucasPizol/PdvMouraWEB",
      },
      {
        type: RepoTypes.M,
        link: "https://github.com/LucasPizol/AppPDV",
      },
    ],
    deploy: "https://pdv-moura-web.vercel.app/auth/login",
  },
  {
    image: chatbot,
    name: "ChatBot - Whatsapp",
    repo: [
      { type: RepoTypes.B, link: "https://github.com/LucasPizol/chat-bot-v2" },
    ],
  },
];

export const Projects = () => {
  return (
    <main className={styles.main} id="projects">
      <Container className={styles.container}>
        <h1 className={styles.title}>PROJETOS</h1>
        <div className={styles.carousel}>
          {projects.map((project, index) => (
            <Project Project={project} key={index} />
          ))}
        </div>
      </Container>
    </main>
  );
};
