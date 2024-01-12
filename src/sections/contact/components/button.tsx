import { ButtonType } from "../contact";
import styles from "./styles.module.css";

type Props = {
  button: ButtonType;
};

export const Button = ({ button }: Props) => {
  return (
    <div className={styles.contactDiv}>
      <p className={styles.title}>
        <button.Icon />
        {button.title}
      </p>
      <a className={styles.button} href={button.link} target="_blank">
        {button.label}
      </a>
    </div>
  );
};
