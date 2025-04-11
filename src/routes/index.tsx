import { $, component$ } from "@builder.io/qwik";
import { useNavigate, type DocumentHead } from "@builder.io/qwik-city";
import { GlassButton } from "~/components/buttons/glass/glass-button";
import { GlassCard } from "~/components/glass-card/glass-card";
import { CountdownTimer } from "~/components/timer/timer";
import { GetBirthday } from "~/services/get-birthday";

const fetchBirthday = new GetBirthday();
const birthdayTitle = fetchBirthday.isBirthday()
  ? "¡Feliz Cumpleaños!"
  : "¡Hola Alejandra!";

export default component$(() => {
  const nav = useNavigate();

  const redirectToGift = $(() => {  
    nav('/gift');
  });

  return (
    <>
      <GlassCard>
        <h1 style={{ marginBottom: "1.5rem", fontSize: "2.5rem" }}>
          {birthdayTitle}
        </h1>
        <CountdownTimer />
        {fetchBirthday.isBirthday() && (
          <>
            <p>{fetchBirthday.getBirthdayMessage()}</p>
            <div>
              <GlassButton onClick={redirectToGift}>Abrir Regalo</GlassButton>
            </div>
          </>
        )}
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

