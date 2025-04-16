import { component$, Slot } from "@builder.io/qwik";
import "./minimalist-button.css";
import type { PropFunction } from "@builder.io/qwik";

interface ButtonProps {
  onClick: PropFunction<() => void>;
}

export const MinimalistButton = component$<ButtonProps>(({ onClick }) => {
  return (
    <button class="button-outline" onClick$={onClick}>
      <Slot />
    </button>
  );
});
