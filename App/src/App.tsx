import datos from "./data/pokemon-stats.json";

import "./App.css";
import ImgPokePixelGroup from "./components/ImgPokePixelGroup/ImgPokePixelGroup";

const images = import.meta.glob("/src/assets/pokemon/gen1/**/*.png", {
  eager: true,
});

const imagesPaths = Object.entries(images).map(([path]) => {
  return path;
});

/* const pokemonPath = imagesPaths.filter((image) =>
  image.includes("Mega_Venusaur")
);

console.log(pokemonPath); */

function App() {
  const datosGen1 = datos.filter((pokemon) => pokemon.Generation === 1);
  return (
    <div className="flexPokemon">
      {datosGen1.map((pokemon, index) => {
        const matchingImages = imagesPaths.filter((image) => {
          const name = pokemon.Original_Name; // por ejemplo, "Pikachu"
          const regex = new RegExp(`\\d+_${name}\\.png$`);

          if (regex.test(image)) {
            return image;
          }
        });

        return (
          <div key={index}>
            <div>
              <ImgPokePixelGroup srcs={matchingImages} alt={pokemon.Name} />
              {pokemon.Branch_Code} {pokemon.Name}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
