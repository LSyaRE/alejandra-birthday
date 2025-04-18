import { $, component$, useSignal } from "@builder.io/qwik";
import {
  routeLoader$,
  type DocumentHead,
} from "@builder.io/qwik-city";
import { GlassButton } from "~/components/buttons/glass/glass-button";
import { MinimalistButton } from "~/components/buttons/minimalist/minimalist-button";
import { NeonButton } from "~/components/buttons/neon/neon-button";
import { GlassCard } from "~/components/glass-card/glass-card";
import { GetBirthday } from "~/services/get-birthday";
import { getBirthdayTitle } from "~/utils/birthday-fetching";

const title = getBirthdayTitle();

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
  const giftTitle = useSignal("Ninguno");
  const giftDescription = useSignal("No se ha seleccionado ningun elemento");
  const keyWord = useSignal("");
  const giftDescription2 = useSignal('');



  const selectRoblox = $(() => {
    giftTitle.value = "Roblox";
    giftDescription.value = "Recarga de 10 dolares para Roblox mandandome un mensaje por whatsapp con la palabra clave:";
    keyWord.value = "roblox1234";
    giftDescription2.value = '';
  });

  const selectRecarga = $(() => {
    giftTitle.value = "Recarga";
    giftDescription.value = "Recarga de 10 dolares para el celular mandandome un mensaje por whatsapp con la palabra clave:";
    keyWord.value = "recarga1584";
    giftDescription2.value = '';
  });

  const selectOtro = $(() => {
    giftTitle.value = "Otro";
    giftDescription.value = "Mandame un mensaje por whatsapp con la palabra clave:";
    keyWord.value = "otro";
    giftDescription2.value = "y el regalo que quieras";
  });

  return (
    <>
      <GlassCard>
        <h1 style={{ marginBottom: "1.5rem", fontSize: "2.5rem" }}>
          ¿Qué quieres de regalo de cumpleaños?
        </h1>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <MinimalistButton onClick={selectRoblox}>Roblox</MinimalistButton>
          <NeonButton onClick={selectRecarga}>Recarga</NeonButton>
          <GlassButton onClick={selectOtro}>Otro</GlassButton>
        </div>
      </GlassCard>

      <GlassCard>
        <h1 style={{ marginBottom: "1.5rem", fontSize: "2.5rem" }}>
          {giftTitle.value}
        </h1>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          {giftDescription.value}<span style={{fontWeight:'bold'}}>{keyWord.value}</span>{ giftDescription2.value}  
        </div>
      </GlassCard>

      <GlassCard>
        <h1 style={{ marginBottom: "1.5rem", fontSize: "2.5rem" }}>
          Versiculo Biblico
        </h1>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          Aca va el versiculo biblico
        </div>
      </GlassCard>
    </>
  );
});

export const head: DocumentHead = {
  title,
  meta: [
    {
      name: title,
      content:
        "Blog que sirve para felicitar el cumpleaños de Alejandra Quinchuqi",
    },
  ],
};
