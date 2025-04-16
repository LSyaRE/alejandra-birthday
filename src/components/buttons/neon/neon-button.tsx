import { component$, Slot } from "@builder.io/qwik";
import "./neon-button.css";

import type { PropFunction } from "@builder.io/qwik";

interface ButtonProps {
  onClick: PropFunction<() => void>;
}

export const NeonButton = component$<ButtonProps>(({ onClick }) => {
  return (
    <button class="button-neon" onClick$={onClick}>
      <Slot />
    </button>
  );
});
