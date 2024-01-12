import { useState } from "react";
import styles from "./styles.module.css";
import { Container } from "react-bootstrap";

const navAnchors = [
  {
    title: "Especialidades",
    href: "#specialties",
  },
  {
    title: "Tecnologias",
    href: "#technologies",
  },
  {
    title: "Projetos",
    href: "#projects",
  },
  {
    title: "Sobre mim",
    href: "#about-me",
  },
];

export const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  console.log(isActive);

  return (
    <header>
      <Container className={styles.header}>
        <p className={styles.name}>{"<Lucas Pizol/>"}</p>

        <nav className={isActive ? styles.navActive : styles.nav}>
          <div
            className={styles.menuHamburgerActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {navAnchors.map((navAnchor) => (
            <a href={navAnchor.href}>{navAnchor.title}</a>
          ))}
        </nav>
        <div
          className={styles.menuHamburger}
          onClick={() => setIsActive(!isActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Container>
    </header>
  );
};
