import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const pokemonId = useSignal(1); // primitivos, booleans, strings,etc

  const changePokemonId = $((value: number) => {
    if (pokemonId.value + value <= 0) return;

    pokemonId.value += value;
  });

  return (
    <>
      <span class="text-2xl">Buscador simple</span>
      <span class="text-9xl">{pokemonId}</span>

      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId.value}.png`}
        alt="Pokemon Sprite"
        style={{ width: "200px" }}
      />
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
