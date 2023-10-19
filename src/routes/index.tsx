import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1 class="text-2xl text-[#6499E9] fw600">Tabang.an</h1>
      <p>Click your way to business success</p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Tabangan",
  meta: [
    {
      name: "description",
      content: "Tabangan app site desc",
    },
  ],
};
