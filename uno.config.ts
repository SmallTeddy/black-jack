import { defineConfig, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  shortcuts: {
    'apple-button': 'px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-80 active:scale-95',
  },
  theme: {
    colors: {
      primary: '#306339',
    },
  },
}) 
