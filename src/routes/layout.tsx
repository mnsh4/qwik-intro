import { component$, Slot, useStyles$ } from "@builder.io/qwik";

import Header from "~/components/shared/header/header";
import Footer from "~/components/shared/footer/footer";

import styles from "./styles.css?inline";

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Header />
      <main class="flex flex-col items-center justify-center">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
