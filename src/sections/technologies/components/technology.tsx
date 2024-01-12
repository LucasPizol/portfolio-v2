import { useState } from "react";
import { TechnologyType } from "../technologies";
import styles from "./styles.module.css";

type Props = {
  Technology: TechnologyType;
};

export const Technology = ({ Technology }: Props) => {
  const [color, setColor] = useState<string>("#fff");

  return (
    <div
      className={styles.technology}
      onMouseEnter={() => setColor(Technology.onHover)}
      onMouseLeave={() => setColor("#fff")}
      style={{ color }}
    >
      <Technology.Icon size={36} />
      <p>{Technology.name}</p>
    </div>
  );
};
