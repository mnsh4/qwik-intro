import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return <div>Hello Qwik! - SSR List</div>;
});

export const head: DocumentHead = {
  title: "SSR List",
};
