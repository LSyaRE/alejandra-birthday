import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

import { routeLoader$ } from "@builder.io/qwik-city";
import { GetBirthday } from "~/services/get-birthday";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

const fetchBirthday = new GetBirthday();

export default component$(() => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          alignItems: "center",
          height: "100vh",
          backgroundImage: "url('/assets/img/hastsunemikunobirth.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: !fetchBirthday.isBirthday() ? "#137a7f" : "#86cecb",
        }}
      >
        <Slot />
      </div>
    </>
  );
});
