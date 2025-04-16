import { component$, Slot } from "@builder.io/qwik";
import "./glass-button.css";
import type { PropFunction } from "@builder.io/qwik";

interface ButtonProps {
  onClick: PropFunction<() => void>;
}

export const GlassButton = component$<ButtonProps>(({ onClick }) => {
  return (
    <button class="button-glass" onClick$={onClick}>
      <Slot />
    </button>
  );
});
