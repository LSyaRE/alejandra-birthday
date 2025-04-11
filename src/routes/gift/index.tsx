import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { GlassCard } from "~/components/glass-card/glass-card";
import { GetBirthday } from "~/services/get-birthday";

const fetchBirthday = new GetBirthday();
const birthdayTitle = !fetchBirthday.isBirthday()
  ? "¡Feliz Cumpleaños!"
  : "¡Hola Alejandra!";

export const useCheckBirthday = routeLoader$((context) => {
  const data = new GetBirthday(); // o cualquier lógica tuya
  const { redirect } = context; // Destructure from the single object

  if (!data.isBirthday()) {
    throw redirect(302, "/");
  }

  return { hi: "Say Hi" }; // puedes pasar datos si querés
});

export default component$(() => {
  useCheckBirthday(); // Llama a la función para verificar el cumpleaños
  return (
    <>
      <GlassCard>
        <button> Roblox</button>
        <button> Recarga</button>
      </GlassCard>
    </>
  );
});

export const head: DocumentHead = {
  title: birthdayTitle,
  meta: [
    {
      name: birthdayTitle,
      content:
        "Blog que sirve para felicitar el cumpleaños de Alejandra Quinchuqi",
    },
  ],
};
