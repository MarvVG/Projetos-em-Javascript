const pokemonImg = document.querySelector("#pokemon");
async function findPokemon() {
  const pokemonName = document.getElementById("pokemon-name");
  const pokemonImg = document.getElementById("pokemon");
  const input = document.getElementById("input-pokemon");
  try {
    const pokemonId = document
      .getElementById("input-pokemon")
      .value.toLowerCase();
    const result = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    if (!result.ok) {
      throw new Error("Pokemon not found");
    }
    const data = await result.json();
    const Img =
      data.sprites.versions["generation-v"]["black-white"]["animated"][
        "front_default"
      ];
    input.value = "";
    pokemonImg.src = Img;
    pokemonImg.style.display = "block";
    pokemonName.innerText = `#${data.id} - ${data.species.name}`;
    pokemonName.style.color = "black";
  } catch (err) {
    input.value = "";
    pokemonImg.src = "";
    pokemonImg.alt = "";
    pokemonName.innerText = "Pokemon not found";
    pokemonName.style.color = "red";
    console.log(err);
  }
}
