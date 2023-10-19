// uno.config.ts
import { defineConfig, presetAttributify, presetTypography, presetUno } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
  ],
})