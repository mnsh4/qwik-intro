import { component$ } from "@builder.io/qwik";

import { QwikLogo } from "../../icons/qwik";
import styles from "./navbar.module.css";

export default component$(() => {
  return (
    <navbar class={styles.navbar}>
      <div class={["container", styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <QwikLogo height={50} width={143} />
          </a>
        </div>
        <ul>
          <li>
            <a
              href="https://qwik.builder.io/docs/components/overview/"
              target="_blank"
            >
              Docs
            </a>
          </li>
        </ul>
      </div>
    </navbar>
  );
});
