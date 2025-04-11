import { component$, PropFunction, Slot } from "@builder.io/qwik";
import "./glass-button.css";

interface GlassButtonProps {
  onClick: PropFunction<() => void>;
}

export const GlassButton = component$<GlassButtonProps>(({ onClick }) => {
  return (
    <button class="button-glass" onClick$={onClick}>
      <Slot />
    </button>
  );
});
