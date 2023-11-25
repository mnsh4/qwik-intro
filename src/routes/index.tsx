import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { PokemonImage } from "../components/pokemons/pokemon-image.tsx";

export default component$(() => {
  const pokemonId = useSignal(1); // primitivos, booleans, strings,etc
  const showBackImage = useSignal(false);

  const changePokemonId = $((value: number) => {
    if (pokemonId.value + value <= 0) return;

    pokemonId.value += value;
  });

  return (
    <>
      <span class="text-2xl">Buscador simple</span>
      <span class="text-9xl">{pokemonId}</span>

      <PokemonImage id={pokemonId.value} backImage={showBackImage.value} />

      <div>
        <button
          class="btn btn-primary mr-2"
          onClick$={() => changePokemonId(-1)}
        >
          Anterior
        </button>
        <button
          class="btn btn-primary mr-2"
          onClick$={() => changePokemonId(1)}
        >
          Siguiente
        </button>

        <button
          onClick$={() => (showBackImage.value = !showBackImage.value)}
          class="btn btn-primary mr-2"
        >
          Voltear
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "PokeQwik",
  meta: [
    {
      name: "description",
      content: "First app in Qwik",
    },
  ],
};
