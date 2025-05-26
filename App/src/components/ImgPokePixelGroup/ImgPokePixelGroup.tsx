import ImgPokePixel from "../ImgPokePixel/ImgPokePixel";
import data from "../../data/pokemon-stats.json";

import styles from "./ImgPokePixelGroup.module.css";

const ImgPokePixelGroup = () => {
  const dataFilterred = data.filter((pokemon) => pokemon.Generation === 3);

  return (
    <div className={styles.divGroup}>
      {dataFilterred.map((pokemon) => (
        <ImgPokePixel
          key={pokemon.Branch_Code}
          scale={1.5}
          src={`https://raw.githubusercontent.com/carlos-trujillo-b/pokemon-sprites/refs/heads/main/${pokemon.Original_Name}/1_${pokemon.Original_Name}.png`}
          alt={pokemon.Name}
        />
      ))}
    </div>
  );
};

export default ImgPokePixelGroup;
