const pokemonImg = document.querySelector("#pokemon");
async function findPokemon() {
  try {
    const pokemonId = document
      .getElementById("input-pokemon")
      .value.toLowerCase();
    const pokemonImg = document.getElementById("pokemon");
    const pokedex = document.getElementById("pokedex");
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    if (!result.ok) {
      throw new Error("Pokemon não encontrado");
    }
    const data = await result.json();
    const Img =
      data.sprites.versions["generation-v"]["black-white"]["animated"][
        "front_default"
      ];
    pokemonImg.src = Img;
    pokemonImg.style.display = "block";
    pokedex.src = "../public/pokedex-2.png";
  } catch (err) {
    console.log(err);
  }
}
