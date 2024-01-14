import { Container } from "react-bootstrap";
import styles from "./styles.module.css";
import { Solutions } from "./components/solutions/solutions";
import { Responsive } from "./components/responsive/responsive";

export const Specialties = () => {
  return (
    <main className={styles.main} id="specialties">
      <Container>
        <Solutions/>
        <Responsive />
      </Container>
    </main>
  );
};
