import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import UnoCSS from "unocss/vite"
import { presetAttributify, presetTypography, presetUno } from "unocss";

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths(), UnoCSS({
      presets: [
        presetUno(),
        presetAttributify(),
        presetTypography(),
      ],
    })],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
